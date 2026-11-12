// js/calls.js
(async function() {
  if (window.__flyCallsInitialized) return;
  window.__flyCallsInitialized = true;

  let currentUserId = null;
  let ringtone = null;
  let vibrateInterval = null;
  let incomingCall = null;
  let callsChannel = null;

  function ensureIncomingOverlay() {
    if (document.getElementById('flyIncomingCallOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'flyIncomingCallOverlay';
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(3, 7, 18, 0.97); z-index: 99999; display: none;
      flex-direction: column; justify-content: center; align-items: center;
      backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
      font-family: 'Inter', sans-serif;
    `;
    overlay.innerHTML = `
      <img id="flyIncomingAvatar" src="default-avatar.png" style="
        width: 130px; height: 130px; border-radius: 50%; object-fit: cover;
        border: 3px solid #00ccff; box-shadow: 0 0 30px rgba(0,204,255,0.6);
        animation: flyCallPulse 1.5s infinite;
      ">
      <h2 id="flyIncomingName" style="color:white; margin-top:25px; font-size:1.5rem;">A ligar...</h2>
      <p id="flyIncomingType" style="color:#8892b0; margin-bottom:45px; font-size:0.95rem;">Chamada de vídeo...</p>
      <div style="display:flex; gap:35px;">
        <button id="flyDeclineBtn" style="
          width:75px; height:75px; border-radius:50%; background:#ff3366; color:white;
          border:none; font-size:1.8rem; cursor:pointer;
          box-shadow:0 0 25px rgba(255,51,102,0.6); display:flex;
          justify-content:center; align-items:center;
        "><i class="fa-solid fa-phone-slash"></i></button>
        <button id="flyAcceptBtn" style="
          width:75px; height:75px; border-radius:50%; background:#00e676; color:white;
          border:none; font-size:1.8rem; cursor:pointer;
          box-shadow:0 0 25px rgba(0,230,118,0.6); display:flex;
          justify-content:center; align-items:center;
        "><i class="fa-solid fa-phone"></i></button>
      </div>
      <style>
        @keyframes flyCallPulse {
          0% { box-shadow: 0 0 0 0 rgba(0,204,255,0.6); }
          70% { box-shadow: 0 0 0 25px rgba(0,204,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,204,255,0); }
        }
      </style>
    `;
    document.body.appendChild(overlay);

    document.getElementById('flyAcceptBtn').onclick = acceptIncomingCall;
    document.getElementById('flyDeclineBtn').onclick = declineIncomingCall;
  }

  async function showIncomingCall(call) {
    if (incomingCall) return;
    incomingCall = call;

    if (!ringtone) {
      ringtone = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
      ringtone.loop = true;
    }
    ringtone.play().catch(e => console.log("Autoplay bloqueado:", e));

    if (navigator.vibrate) {
      navigator.vibrate([500, 500, 500, 500]);
      vibrateInterval = setInterval(() => navigator.vibrate([500, 500, 500, 500]), 2000);
    }

    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('username, avatar_url')
      .eq('id', call.caller_id)
      .single();

    document.getElementById('flyIncomingAvatar').src = profile?.avatar_url || 'default-avatar.png';
    document.getElementById('flyIncomingName').innerText = profile?.username || 'Alguém';
    document.getElementById('flyIncomingType').innerText = call.type === 'video' ? 'Chamada de vídeo...' : 'Chamada de voz...';
    document.getElementById('flyIncomingCallOverlay').style.display = 'flex';
  }

  function hideIncomingCall() {
    const overlay = document.getElementById('flyIncomingCallOverlay');
    if (overlay) overlay.style.display = 'none';
    if (ringtone) { ringtone.pause(); ringtone.currentTime = 0; }
    if (vibrateInterval) { clearInterval(vibrateInterval); vibrateInterval = null; }
    if (navigator.vibrate) navigator.vibrate(0);
    incomingCall = null;
  }

  function acceptIncomingCall() {
    if (!incomingCall) return;
    const call = incomingCall;
    hideIncomingCall();
    window.location.href = `chamada.html?user_id=${call.caller_id}&type=${call.type}&call_id=${call.id}&role=receiver`;
  }

  async function declineIncomingCall() {
    if (!incomingCall) return;
    const call = incomingCall;
    hideIncomingCall();
    await supabaseClient.from('calls').update({ status: 'declined' }).eq('id', call.id);
  }

  async function initCallListener() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) return;
    currentUserId = session.user.id;

    ensureIncomingOverlay();

    callsChannel = supabaseClient.channel('global-incoming-calls')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'calls', filter: `receiver_id=eq.${currentUserId}` },
        async (payload) => {
          const call = payload.new;
          if (call.status === 'ringing') await showIncomingCall(call);
        }
      )
      .on('postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'calls', filter: `receiver_id=eq.${currentUserId}` },
        (payload) => {
          const status = payload.new.status;
          if ((status === 'declined' || status === 'ended' || status === 'cancelled') && incomingCall && incomingCall.id === payload.new.id) {
            hideIncomingCall();
          }
        }
      )
      .subscribe();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCallListener);
  } else {
    initCallListener();
  }
})();