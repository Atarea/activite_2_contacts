/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log("Bienvenue dans le gestionnaire de contacts !" +
            "\n1 : Lister les contacts" +
            "\n2 : Ajouter un contact" +
            "\n0 : Quitter");

var contact = {
  // initialisation du contact
  init: function(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  decrire: function() {
    var contacts = this.nom + " " + this.prenom;
    return description;
  }
};

// création des 2 premiers contacts
var contact1 = Object.create(contact);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(contact);
contact2.init("Nelsonne", "Mélodie");

// création du tableau et insertion des 2 contacts créés
var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

// saisie de l'utilisateur
var saisie = Number(prompt("Choisissez une option :"));

// création de la "boucle"
var option = ["1 : Liste des contacts", "2 : Ajouter un contact", "0 : Quitter"];
while(saisie !==0) {
  switch(saisie) {
    case 1:
        console.log("Voici la liste de tous vos contacts")
        for (var i = 0; i < contacts.length; i++) {
        console.log("Nom : " + contacts[i].nom + ", prénom : " + contacts[i].prenom);
        };
        saisie = Number(prompt("Choisissez une option :"));
        break;
    case 2:
        var nom = prompt("Saisissez le nom du nouveau contact");
        var prenom = prompt("Saisissez le prénom du nouveau contact");
        var ajouterContact = "contact" + contacts.length;
        ajouterContact = Object.create(contact);
        ajouterContact.init(nom, prenom);
        contacts.push(ajouterContact);
        console.log("Le contact a bien été ajouté");
        saisie = Number(prompt("Choisissez une option :"));
        break;
    default:
        console.log("Choisissez une option entre 1, 2 ou 0");
        saisie = Number(prompt("Choisissez une option :"));
  }
};
if (saisie === 0){
  console.log("Au revoir !");
};
