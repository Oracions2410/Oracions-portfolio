export default [
    {
        _id: 1,
        title: "C'est quoi Linux ?",
        content: "../../assets/posts/post2.md",
        image: "./images/linux.svg",
        intro: `Virtual box est un logiciel gratuit de virtualisation multiplateforme permettant d’exécuter un
        ou plusieurs systèmes d’exploitation sur Windows, MAC ou Linux.La machine virtuelle ainsi
        créée partage les ressources matérielles de la machine hôte.`,
        created_at: new Date().toDateString(),
        category: 'adminsys'
    },
    {
        _id: 2,
        title: "Connexion distante via SSH",
        content: "../../assets/posts/post1.md",
        image: "./images/remote.jpg",
        intro: `Le choix d’une distribution dépend étroitement des fins d’utilisation de système
        d’exploitation et du niveau de l’utilisateur. Chaque distribution linux est spécifique à un
        certain nombre de cas : Debian par exemple est apprécié par les professionnel et les
        administrateurs système pour sa stabilité, Ubuntu desktop s’installe avec toute une suite
        d’outils tels que les logiciels de traitement de texte, lecteurs multimédia`,
        created_at: new Date().toDateString(),
        category: 'adminsys'
    },
    {
        _id: 3,
        title: "Notions fondamentales de la cyber sécurité",
        content: "../../assets/posts/post1.md",
        image: "./images/cyber.jpeg",
        intro: `Le choix d’une distribution dépend étroitement des fins d’utilisation de système
        d’exploitation et du niveau de l’utilisateur. Chaque distribution linux est spécifique à un
        certain nombre de cas : Debian par exemple est apprécié par les professionnel et les
        administrateurs système pour sa stabilité, Ubuntu desktop s’installe avec toute une suite
        d’outils tels que les logiciels de traitement de texte, lecteurs multimédia`,
        created_at: new Date().toDateString(),
        category: 'cybersecurity'
    },
]