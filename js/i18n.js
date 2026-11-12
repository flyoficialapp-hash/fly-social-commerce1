// js/i18n.js
const translations = {
  pt: {
    nav_home: "Início", nav_market: "Mercado", nav_chat: "Chat", nav_business: "Negócio", nav_profile: "Perfil",
    home_menu: "MENU", home_what_thinking: "No que estás a pensar?", story_create: "Criar", story_yours: "Criar Story",
    home_empty_title: "O teu feed está vazio", home_empty_desc: "Segue pessoas ou cria a tua primeira publicação para começar!", home_empty_btn: "Criar Publicação",
    post_publish: "Publicar", post_add_comment: "Escreve um comentário...", post_options: "Opções da Publicação", post_edit: "Editar Texto/Mídia", post_delete: "Apagar Publicação", post_cancel: "Cancelar",
    chat_title: "Chat", chat_tab_all: "Todos", chat_tab_clients: "Clientes", chat_tab_sellers: "Vendedores", chat_tab_friends: "Amigos", chat_tab_followers: "Seguidores", chat_loading: "A carregar...", chat_empty: "Ainda não tens conversas.",
    market_search: "Pesquisar produtos...", market_all: "Tudo", market_electronics: "Eletrónicos", market_fashion: "Moda", market_home: "Casa", market_vehicles: "Veículos", market_premium: "Destaque", market_buy: "Comprar", market_empty: "Nenhum produto encontrado.",
    profile_title: "Perfil", profile_edit: "Editar Perfil", profile_saved: "Guardados", profile_purchases: "Minhas Compras", profile_ads: "Anúncios", profile_followers: "Seguidores", profile_friends: "Amigos", profile_rating: "Avaliação", profile_logout: "Terminar Sessão", profile_my_ads: "Os Meus Anúncios",
    profile_edit_title: "Editar Perfil", profile_change_photo: "Mudar Foto", profile_username: "Nome de Utilizador", profile_bio: "Biografia", profile_native_lang: "Idioma Nativo (para traduções)", profile_save_btn: "Guardar Alterações",
    sales_title: "Vendas", sales_total: "Total Vendido", sales_pending: "Pedidos Pendentes", sales_tab_all: "Todos", sales_tab_pending: "Pendentes", sales_tab_sent: "Enviados", sales_client: "Cliente:", sales_talk: "Falar", sales_concluded: "Concluído",
    settings_title: "Definições", settings_lang_grp: "Idioma e Região", settings_lang_lbl: "Idioma Padrão", settings_lang_desc: "Para traduções automáticas no chat",
    settings_acc_grp: "Conta e Segurança", settings_edit_prof: "Editar Perfil", settings_edit_prof_desc: "Foto, nome e biografia", settings_change_pass: "Alterar Palavra-passe", settings_change_pass_desc: "Muda a sua senha de acesso",
    settings_priv_grp: "Privacidade", settings_priv_acc: "Conta Privada", settings_priv_acc_desc: "Só seguidores veem os seus posts",
    settings_sess_grp: "Sessão e Conta", settings_logout: "Terminar Sessão",
    purchases_title: "Minhas Compras", purchases_empty: "Ainda não fizeste nenhuma compra.", purchases_go_market: "Ir ao Mercado",
    login_welcome: "Bem-vindo de volta!", login_email: "E-mail", login_pass: "Palavra-passe", login_btn: "Entrar", login_forgot: "Esqueci-me da palavra-passe", login_or: "ou", login_no_account: "Ainda não tenho conta", login_register: "Criar Conta", login_username: "Nome de Utilizador", login_have_account: "Já tenho conta, entrar"
  },
  en: {
    nav_home: "Home", nav_market: "Market", nav_chat: "Chat", nav_business: "Business", nav_profile: "Profile",
    home_menu: "MENU", home_what_thinking: "What's on your mind?", story_create: "Create", story_yours: "Create Story",
    home_empty_title: "Your feed is empty", home_empty_desc: "Follow people or create your first post to get started!", home_empty_btn: "Create Post",
    post_publish: "Publish", post_add_comment: "Write a comment...", post_options: "Post Options", post_edit: "Edit Text/Media", post_delete: "Delete Post", post_cancel: "Cancel",
    chat_title: "Chat", chat_tab_all: "All", chat_tab_clients: "Clients", chat_tab_sellers: "Sellers", chat_tab_friends: "Friends", chat_tab_followers: "Followers", chat_loading: "Loading...", chat_empty: "No conversations yet.",
    market_search: "Search products...", market_all: "All", market_electronics: "Electronics", market_fashion: "Fashion", market_home: "Home", market_vehicles: "Vehicles", market_premium: "Featured", market_buy: "Buy", market_empty: "No products found.",
    profile_title: "Profile", profile_edit: "Edit Profile", profile_saved: "Saved", profile_purchases: "My Purchases", profile_ads: "Listings", profile_followers: "Followers", profile_friends: "Friends", profile_rating: "Rating", profile_logout: "Log Out", profile_my_ads: "My Listings",
    profile_edit_title: "Edit Profile", profile_change_photo: "Change Photo", profile_username: "Username", profile_bio: "Biography", profile_native_lang: "Native Language (for translations)", profile_save_btn: "Save Changes",
    sales_title: "Sales", sales_total: "Total Sold", sales_pending: "Pending Orders", sales_tab_all: "All", sales_tab_pending: "Pending", sales_tab_sent: "Sent", sales_client: "Client:", sales_talk: "Talk", sales_concluded: "Concluded",
    settings_title: "Settings", settings_lang_grp: "Language & Region", settings_lang_lbl: "Default Language", settings_lang_desc: "For automatic chat translations",
    settings_acc_grp: "Account & Security", settings_edit_prof: "Edit Profile", settings_edit_prof_desc: "Photo, name and bio", settings_change_pass: "Change Password", settings_change_pass_desc: "Change your access password",
    settings_priv_grp: "Privacy", settings_priv_acc: "Private Account", settings_priv_acc_desc: "Only followers see your posts",
    settings_sess_grp: "Session & Account", settings_logout: "Log Out",
    purchases_title: "My Purchases", purchases_empty: "You haven't made any purchases yet.", purchases_go_market: "Go to Market",
    login_welcome: "Welcome back!", login_email: "E-mail", login_pass: "Password", login_btn: "Log In", login_forgot: "Forgot password", login_or: "or", login_no_account: "I don't have an account", login_register: "Create Account", login_username: "Username", login_have_account: "I already have an account, log in"
  },
  'zh-CN': {
    nav_home: "首页", nav_market: "市场", nav_chat: "聊天", nav_business: "业务", nav_profile: "个人资料",
    home_menu: "菜单", home_what_thinking: "你在想什么？", story_create: "创建", story_yours: "创建故事",
    home_empty_title: "你的动态是空的", home_empty_desc: "关注他人或创建你的第一条动态！", home_empty_btn: "创建动态",
    post_publish: "发布", post_add_comment: "写评论...", post_options: "动态选项", post_edit: "编辑文字/媒体", post_delete: "删除动态", post_cancel: "取消",
    chat_title: "聊天", chat_tab_all: "全部", chat_tab_clients: "客户", chat_tab_sellers: "卖家", chat_tab_friends: "朋友", chat_tab_followers: "粉丝", chat_loading: "加载中...", chat_empty: "暂无对话。",
    market_search: "搜索产品...", market_all: "全部", market_electronics: "电子产品", market_fashion: "时尚", market_home: "家居", market_vehicles: "车辆", market_premium: "推荐", market_buy: "购买", market_empty: "未找到产品。",
    profile_title: "个人资料", profile_edit: "编辑资料", profile_saved: "已保存", profile_purchases: "我的购买", profile_ads: "广告", profile_followers: "粉丝", profile_friends: "朋友", profile_rating: "评分", profile_logout: "退出登录", profile_my_ads: "我的广告",
    profile_edit_title: "编辑资料", profile_change_photo: "更换照片", profile_username: "用户名", profile_bio: "个人简介", profile_native_lang: "母语（用于翻译）", profile_save_btn: "保存更改",
    sales_title: "销售", sales_total: "总销售额", sales_pending: "待处理订单", sales_tab_all: "全部", sales_tab_pending: "待处理", sales_tab_sent: "已发货", sales_client: "客户：", sales_talk: "交谈", sales_concluded: "已完成",
    settings_title: "设置", settings_lang_grp: "语言和地区", settings_lang_lbl: "默认语言", settings_lang_desc: "用于自动聊天翻译",
    settings_acc_grp: "账号和安全", settings_edit_prof: "编辑个人资料", settings_edit_prof_desc: "照片、姓名和简介", settings_change_pass: "更改密码", settings_change_pass_desc: "更改您的访问密码",
    settings_priv_grp: "隐私", settings_priv_acc: "私密账号", settings_priv_acc_desc: "只有关注者才能看到您的帖子",
    settings_sess_grp: "会话和账号", settings_logout: "退出登录",
    purchases_title: "我的购买", purchases_empty: "你还没有进行任何购买。", purchases_go_market: "去市场",
    login_welcome: "欢迎回来！", login_email: "邮箱", login_pass: "密码", login_btn: "登录", login_forgot: "忘记密码", login_or: "或", login_no_account: "我没有账号", login_register: "创建账号", login_username: "用户名", login_have_account: "我已有账号，去登录"
  },
  es: {
    nav_home: "Inicio", nav_market: "Mercado", nav_chat: "Chat", nav_business: "Negocios", nav_profile: "Perfil",
    home_menu: "MENÚ", home_what_thinking: "¿Qué estás pensando?", story_create: "Crear", story_yours: "Crear Historia",
    home_empty_title: "Tu feed está vacío", home_empty_desc: "¡Sigue a personas o crea tu primera publicación para empezar!", home_empty_btn: "Crear Publicación",
    post_publish: "Publicar", post_add_comment: "Escribe un comentario...", post_options: "Opciones de Publicación", post_edit: "Editar Texto/Multimedia", post_delete: "Eliminar Publicación", post_cancel: "Cancelar",
    chat_title: "Chat", chat_tab_all: "Todos", chat_tab_clients: "Clientes", chat_tab_sellers: "Vendedores", chat_tab_friends: "Amigos", chat_tab_followers: "Seguidores", chat_loading: "Cargando...", chat_empty: "Aún no tienes conversaciones.",
    market_search: "Buscar productos...", market_all: "Todo", market_electronics: "Electrónicos", market_fashion: "Moda", market_home: "Hogar", market_vehicles: "Vehículos", market_premium: "Destacado", market_buy: "Comprar", market_empty: "No se encontraron productos.",
    profile_title: "Perfil", profile_edit: "Editar Perfil", profile_saved: "Guardados", profile_purchases: "Mis Compras", profile_ads: "Anuncios", profile_followers: "Seguidores", profile_friends: "Amigos", profile_rating: "Calificación", profile_logout: "Cerrar Sesión", profile_my_ads: "Mis Anuncios",
    profile_edit_title: "Editar Perfil", profile_change_photo: "Cambiar Foto", profile_username: "Nombre de usuario", profile_bio: "Biografía", profile_native_lang: "Idioma nativo (para traducciones)", profile_save_btn: "Guardar Cambios",
    sales_title: "Ventas", sales_total: "Total Vendido", sales_pending: "Pedidos Pendientes", sales_tab_all: "Todos", sales_tab_pending: "Pendientes", sales_tab_sent: "Enviados", sales_client: "Cliente:", sales_talk: "Hablar", sales_concluded: "Concluido",
    settings_title: "Ajustes", settings_lang_grp: "Idioma y Región", settings_lang_lbl: "Idioma Predeterminado", settings_lang_desc: "Para traducciones automáticas en el chat",
    settings_acc_grp: "Cuenta y Seguridad", settings_edit_prof: "Editar Perfil", settings_edit_prof_desc: "Foto, nombre y biografía", settings_change_pass: "Cambiar Contraseña", settings_change_pass_desc: "Cambia tu contraseña de acceso",
    settings_priv_grp: "Privacidad", settings_priv_acc: "Cuenta Privada", settings_priv_acc_desc: "Solo los seguidores ven tus publicaciones",
    settings_sess_grp: "Sesión y Cuenta", settings_logout: "Cerrar Sesión",
    purchases_title: "Mis Compras", purchases_empty: "Aún no has realizado ninguna compra.", purchases_go_market: "Ir al Mercado",
    login_welcome: "¡Bienvenido de vuelta!", login_email: "Correo", login_pass: "Contraseña", login_btn: "Entrar", login_forgot: "Olvidé mi contraseña", login_or: "o", login_no_account: "No tengo cuenta", login_register: "Crear Cuenta", login_username: "Nombre de usuario", login_have_account: "Ya tengo cuenta, entrar"
  },
  fr: {
    nav_home: "Accueil", nav_market: "Marché", nav_chat: "Chat", nav_business: "Affaires", nav_profile: "Profil",
    home_menu: "MENU", home_what_thinking: "À quoi penses-tu ?", story_create: "Créer", story_yours: "Créer une Story",
    home_empty_title: "Ton fil est vide", home_empty_desc: "Suis des gens ou crée ta première publication pour commencer !", home_empty_btn: "Créer une Publication",
    post_publish: "Publier", post_add_comment: "Écrire un commentaire...", post_options: "Options de Publication", post_edit: "Modifier Texte/Média", post_delete: "Supprimer la Publication", post_cancel: "Annuler",
    chat_title: "Chat", chat_tab_all: "Tous", chat_tab_clients: "Clients", chat_tab_sellers: "Vendeurs", chat_tab_friends: "Amis", chat_tab_followers: "Abonnés", chat_loading: "Chargement...", chat_empty: "Pas encore de conversations.",
    market_search: "Rechercher des produits...", market_all: "Tout", market_electronics: "Électronique", market_fashion: "Mode", market_home: "Maison", market_vehicles: "Véhicules", market_premium: "En vedette", market_buy: "Acheter", market_empty: "Aucun produit trouvé.",
    profile_title: "Profil", profile_edit: "Modifier le Profil", profile_saved: "Enregistrés", profile_purchases: "Mes Achats", profile_ads: "Annonces", profile_followers: "Abonnés", profile_friends: "Amis", profile_rating: "Évaluation", profile_logout: "Se Déconnecter", profile_my_ads: "Mes Annonces",
    profile_edit_title: "Modifier le Profil", profile_change_photo: "Changer la Photo", profile_username: "Nom d'utilisateur", profile_bio: "Biographie", profile_native_lang: "Langue maternelle (pour les traductions)", profile_save_btn: "Enregistrer les Modifications",
    sales_title: "Ventes", sales_total: "Total Vendu", sales_pending: "Commandes en Attente", sales_tab_all: "Tous", sales_tab_pending: "En attente", sales_tab_sent: "Envoyés", sales_client: "Client :", sales_talk: "Parler", sales_concluded: "Terminé",
    settings_title: "Paramètres", settings_lang_grp: "Langue et Région", settings_lang_lbl: "Langue par Défaut", settings_lang_desc: "Pour les traductions automatiques dans le chat",
    settings_acc_grp: "Compte et Sécurité", settings_edit_prof: "Modifier le Profil", settings_edit_prof_desc: "Photo, nom et bio", settings_change_pass: "Changer le Mot de Passe", settings_change_pass_desc: "Changez votre mot de passe d'accès",
    settings_priv_grp: "Confidentialité", settings_priv_acc: "Compte Privé", settings_priv_acc_desc: "Seuls les abonnés voient vos publications",
    settings_sess_grp: "Session et Compte", settings_logout: "Se Déconnecter",
    purchases_title: "Mes Achats", purchases_empty: "Vous n'avez pas encore effectué d'achat.", purchases_go_market: "Aller au Marché",
    login_welcome: "Bon retour !", login_email: "E-mail", login_pass: "Mot de passe", login_btn: "Se Connecter", login_forgot: "Mot de passe oublié", login_or: "ou", login_no_account: "Je n'ai pas de compte", login_register: "Créer un Compte", login_username: "Nom d'utilisateur", login_have_account: "J'ai déjà un compte, se connecter"
  },
  de: {
    nav_home: "Startseite", nav_market: "Markt", nav_chat: "Chat", nav_business: "Business", nav_profile: "Profil",
    home_menu: "MENÜ", home_what_thinking: "Woran denkst du?", story_create: "Erstellen", story_yours: "Story Erstellen",
    home_empty_title: "Dein Feed ist leer", home_empty_desc: "Folge Leuten oder erstelle deinen ersten Beitrag!", home_empty_btn: "Beitrag Erstellen",
    post_publish: "Veröffentlichen", post_add_comment: "Schreibe einen Kommentar...", post_options: "Beitragsoptionen", post_edit: "Text/Medien Bearbeiten", post_delete: "Beitrag Löschen", post_cancel: "Abbrechen",
    chat_title: "Chat", chat_tab_all: "Alle", chat_tab_clients: "Kunden", chat_tab_sellers: "Verkäufer", chat_tab_friends: "Freunde", chat_tab_followers: "Follower", chat_loading: "Laden...", chat_empty: "Noch keine Gespräche.",
    market_search: "Produkte suchen...", market_all: "Alle", market_electronics: "Elektronik", market_fashion: "Mode", market_home: "Haus", market_vehicles: "Fahrzeuge", market_premium: "Hervorgehoben", market_buy: "Kaufen", market_empty: "Keine Produkte gefunden.",
    profile_title: "Profil", profile_edit: "Profil Bearbeiten", profile_saved: "Gespeichert", profile_purchases: "Meine Käufe", profile_ads: "Anzeigen", profile_followers: "Follower", profile_friends: "Freunde", profile_rating: "Bewertung", profile_logout: "Abmelden", profile_my_ads: "Meine Anzeigen",
    profile_edit_title: "Profil Bearbeiten", profile_change_photo: "Foto Ändern", profile_username: "Benutzername", profile_bio: "Biografie", profile_native_lang: "Muttersprache (für Übersetzungen)", profile_save_btn: "Änderungen Speichern",
    sales_title: "Verkäufe", sales_total: "Gesamtverkauf", sales_pending: "Ausstehende Bestellungen", sales_tab_all: "Alle", sales_tab_pending: "Ausstehend", sales_tab_sent: "Gesendet", sales_client: "Kunde:", sales_talk: "Sprechen", sales_concluded: "Abgeschlossen",
    settings_title: "Einstellungen", settings_lang_grp: "Sprache & Region", settings_lang_lbl: "Standardsprache", settings_lang_desc: "Für automatische Chat-Übersetzungen",
    settings_acc_grp: "Konto & Sicherheit", settings_edit_prof: "Profil Bearbeiten", settings_edit_prof_desc: "Foto, Name und Bio", settings_change_pass: "Passwort Ändern", settings_change_pass_desc: "Ändern Sie Ihr Zugangspasswort",
    settings_priv_grp: "Privatsphäre", settings_priv_acc: "Privates Konto", settings_priv_acc_desc: "Nur Follower sehen Ihre Beiträge",
    settings_sess_grp: "Sitzung & Konto", settings_logout: "Abmelden",
    purchases_title: "Meine Käufe", purchases_empty: "Sie haben noch keine Käufe getätigt.", purchases_go_market: "Zum Markt",
    login_welcome: "Willkommen zurück!", login_email: "E-Mail", login_pass: "Passwort", login_btn: "Anmelden", login_forgot: "Passwort vergessen", login_or: "oder", login_no_account: "Ich habe kein Konto", login_register: "Konto Erstellen", login_username: "Benutzername", login_have_account: "Ich habe bereits ein Konto, anmelden"
  },
  it: {
    nav_home: "Home", nav_market: "Mercato", nav_chat: "Chat", nav_business: "Affari", nav_profile: "Profilo",
    home_menu: "MENU", home_what_thinking: "A cosa stai pensando?", story_create: "Crea", story_yours: "Crea Storia",
    home_empty_title: "Il tuo feed è vuoto", home_empty_desc: "Segui persone o crea il tuo primo post per iniziare!", home_empty_btn: "Crea Post",
    post_publish: "Pubblica", post_add_comment: "Scrivi un commento...", post_options: "Opzioni del Post", post_edit: "Modifica Testo/Media", post_delete: "Elimina Post", post_cancel: "Annulla",
    chat_title: "Chat", chat_tab_all: "Tutti", chat_tab_clients: "Clienti", chat_tab_sellers: "Venditori", chat_tab_friends: "Amici", chat_tab_followers: "Follower", chat_loading: "Caricamento...", chat_empty: "Nessuna conversazione.",
    market_search: "Cerca prodotti...", market_all: "Tutto", market_electronics: "Elettronica", market_fashion: "Moda", market_home: "Casa", market_vehicles: "Veicoli", market_premium: "In evidenza", market_buy: "Acquista", market_empty: "Nessun prodotto trovato.",
    profile_title: "Profilo", profile_edit: "Modifica Profilo", profile_saved: "Salvati", profile_purchases: "I Miei Acquisti", profile_ads: "Annunci", profile_followers: "Follower", profile_friends: "Amici", profile_rating: "Valutazione", profile_logout: "Disconnetti", profile_my_ads: "I Miei Annunci",
    profile_edit_title: "Modifica Profilo", profile_change_photo: "Cambia Foto", profile_username: "Nome utente", profile_bio: "Biografia", profile_native_lang: "Lingua madre (per traduzioni)", profile_save_btn: "Salva Modifiche",
    sales_title: "Vendite", sales_total: "Totale Venduto", sales_pending: "Ordini in Sospeso", sales_tab_all: "Tutti", sales_tab_pending: "In sospeso", sales_tab_sent: "Inviati", sales_client: "Cliente:", sales_talk: "Parla", sales_concluded: "Completato",
    settings_title: "Impostazioni", settings_lang_grp: "Lingua e Regione", settings_lang_lbl: "Lingua Predefinita", settings_lang_desc: "Per traduzioni automatiche in chat",
    settings_acc_grp: "Account e Sicurezza", settings_edit_prof: "Modifica Profilo", settings_edit_prof_desc: "Foto, nome e bio", settings_change_pass: "Cambia Password", settings_change_pass_desc: "Cambia la tua password di accesso",
    settings_priv_grp: "Privacy", settings_priv_acc: "Account Privato", settings_priv_acc_desc: "Solo i follower vedono i tuoi post",
    settings_sess_grp: "Sessione e Account", settings_logout: "Disconnetti",
    purchases_title: "I Miei Acquisti", purchases_empty: "Non hai ancora effettuato acquisti.", purchases_go_market: "Vai al Mercato",
    login_welcome: "Bentornato!", login_email: "E-mail", login_pass: "Password", login_btn: "Accedi", login_forgot: "Password dimenticata", login_or: "o", login_no_account: "Non ho un account", login_register: "Crea Account", login_username: "Nome utente", login_have_account: "Ho già un account, accedi"
  },
  ru: {
    nav_home: "Главная", nav_market: "Рынок", nav_chat: "Чат", nav_business: "Бизнес", nav_profile: "Профиль",
    home_menu: "МЕНЮ", home_what_thinking: "О чем ты думаешь?", story_create: "Создать", story_yours: "Создать Историю",
    home_empty_title: "Ваша лента пуста", home_empty_desc: "Подпишитесь на людей или создайте первый пост!", home_empty_btn: "Создать Пост",
    post_publish: "Опубликовать", post_add_comment: "Написать комментарий...", post_options: "Опции Поста", post_edit: "Редактировать Текст/Медиа", post_delete: "Удалить Пост", post_cancel: "Отмена",
    chat_title: "Чат", chat_tab_all: "Все", chat_tab_clients: "Клиенты", chat_tab_sellers: "Продавцы", chat_tab_friends: "Друзья", chat_tab_followers: "Подписчики", chat_loading: "Загрузка...", chat_empty: "Пока нет бесед.",
    market_search: "Поиск товаров...", market_all: "Все", market_electronics: "Электроника", market_fashion: "Мода", market_home: "Дом", market_vehicles: "Транспорт", market_premium: "Рекомендуемые", market_buy: "Купить", market_empty: "Товары не найдены.",
    profile_title: "Профиль", profile_edit: "Редактировать Профиль", profile_saved: "Сохраненные", profile_purchases: "Мои Покупки", profile_ads: "Объявления", profile_followers: "Подписчики", profile_friends: "Друзья", profile_rating: "Рейтинг", profile_logout: "Выйти", profile_my_ads: "Мои Объявления",
    profile_edit_title: "Редактировать Профиль", profile_change_photo: "Изменить Фото", profile_username: "Имя пользователя", profile_bio: "Биография", profile_native_lang: "Родной язык (для переводов)", profile_save_btn: "Сохранить Изменения",
    sales_title: "Продажи", sales_total: "Всего Продано", sales_pending: "Ожидающие Заказы", sales_tab_all: "Все", sales_tab_pending: "В ожидании", sales_tab_sent: "Отправлено", sales_client: "Клиент:", sales_talk: "Говорить", sales_concluded: "Завершено",
    settings_title: "Настройки", settings_lang_grp: "Язык и регион", settings_lang_lbl: "Язык по умолчанию", settings_lang_desc: "Для автоматического перевода в чате",
    settings_acc_grp: "Аккаунт и безопасность", settings_edit_prof: "Редактировать профиль", settings_edit_prof_desc: "Фото, имя и биография", settings_change_pass: "Изменить пароль", settings_change_pass_desc: "Измените пароль для доступа",
    settings_priv_grp: "Конфиденциальность", settings_priv_acc: "Закрытый аккаунт", settings_priv_acc_desc: "Только подписчики видят ваши посты",
    settings_sess_grp: "Сеанс и аккаунт", settings_logout: "Выйти",
    purchases_title: "Мои Покупки", purchases_empty: "Вы еще не совершали покупок.", purchases_go_market: "Перейти на Рынок",
    login_welcome: "С возвращением!", login_email: "Эл. почта", login_pass: "Пароль", login_btn: "Войти", login_forgot: "Забыли пароль", login_or: "или", login_no_account: "У меня нет аккаунта", login_register: "Создать Аккаунт", login_username: "Имя пользователя", login_have_account: "У меня уже есть аккаунт, войти"
  }
};

function applyTranslations() {
  const lang = localStorage.getItem('fly_language') || 'pt';
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    } else if (translations['pt'] && translations['pt'][key]) {
      el.innerText = translations['pt'][key];
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    } else if (translations['pt'] && translations['pt'][key]) {
      el.placeholder = translations['pt'][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', applyTranslations);