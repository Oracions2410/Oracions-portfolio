## INTALLATION ET CONNEXION AU SYSTEME LINUX

### Problématique :

- C’est quoi Virtual box?
- C’est quoi SSH?
- Comment changer le port SSH par défaut sur linux?
- Comment se connecter à un système linux à distance depuis Windows?
- Installation de Virtual box
- Installation de Ubuntu/Cent OS server 16.

### DEFINITIONS

**Virtual box** est un logiciel gratuit de virtualisation multiplateforme permettant d’exécuter un
ou plusieurs systèmes d’exploitation sur Windows, MAC ou Linux. La machine virtuelle ainsi
créée partage les ressources matérielles de la machine hôte.

**SSH** signifie **S** ecure **Sh** ell. Il s’agit donc d’un SHell dit sécurisé communément utilisé pour une
communication sécurisée au sein d’un réseau, particulièrement pour communiquer avec un
serveur à distance via internet, ou encore pour sécuriser les données qui transite en
permanence sur un réseau via le protocole http.

**Le Shell** est un interpréteur de commande qui permet de communiquer avec le système
d’exploitation en écrivant des commandes depuis un clavier. Encore appelé interface système
c’est l’interface utilisateur la plus apprécié par les utilisateurs de système Unix.

### INSTALLATION ET CONFIGURATION DE SSH

Installation de ssh

```
$ sudo apt update
```
```
$ sudo apt upgrade
```
```
$ sudo apt install openssh-server
```
#### TOPIC 2

#### :

```
10 – 16 Mai 2020
```

Activer et démarrer le service

Modifier le port par défaut dans le fichier de configuration du service situé dans
/etc/ssh/sshd_config. La modification s’effectue en changeant la ligne #port 22. Remplacer 22
par le numéro du port que l’on souhaite attribuer au service (17371).

Redémarrer le service

```
$ sudo systemctl enable ssh$ sudo systemctl start ssh
```
```
$ sudo systemctl status ssh
```
```
$ sudo nano /etc/ssh/sshd_config
```
```
$ sudo systemctl restart ssh
```

### CONNEXION DISTANTE DEPUIS WINDOWS

### Redirection des ports

Pour pouvoir établir la communication entre la machine hôte et la machine virtuelle, il
faudrait configurer Virtual box et faire une redirection de port. De sorte que lorsqu’il y a une
connexion entrante, sur un port de la machine hôte on la redirige vers la machine virtuelle.
Ainsi les requêtes de connexions ssh s’adresseront à la machine hôte et seront redirigé vers la
machine virtuelle.


### Connexion avec putty

Putty est émulateur de terminal sur Windows qui possède un client SSH et permet d’établir

### une connexion sécurisée avec un serveur à travers un réseau.

(^)


**Ressources :**

https://www.supinfo.com/articles/single/1643-debuter-avec-oracle-vm-virtualbox
https://fr.wikihow.com/installer-VirtualBox
https://hibbard.eu/install-ubuntu-virtual-box/
https://www.it-connect.fr/chapitres/quest-ce-que-ssh/
https://linuxize.com/post/how-to-change-ssh-port-in-linux/
https://www.cyberciti.biz/faq/ubuntu-linux-install-openssh-server/
[http://ubuntuhandbook.org/index.php/2016/04/enable-ssh-ubuntu-](http://ubuntuhandbook.org/index.php/2016/04/enable-ssh-ubuntu-) 16 - 04 - lts/
https://doc.ubuntu-fr.org/depots_bionic