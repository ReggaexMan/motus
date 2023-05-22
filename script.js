  // Appel de la fonction d'initialisation du jeu au chargement de la page
    window.addEventListener("load", initialiserJeu);
  
  // Fonction d'initialisation du jeu
  function initialiserJeu() {
    genererMotSecret();
    console.log("le mot secret est", motSecret)
  
    const boutonSoumettre = document.getElementById("submit-button");
    boutonSoumettre.addEventListener("click", verif);
  }

// Tableau de mots à deviner
const mots = [
    "arbre",
    "livre",
    "table",
    "terre",
    "chien",
    "chats",
    "slips",
    "chips",
    "fleur",
    "fruit"
  ];
  
  // Mot secret
  let motSecret = [];
  
  // Nombre maximum de tentatives
  const maxTentatives = 5;
  
  // Lettres devinées
  let lettresDevinees = [];
  
  // Fonction pour générer un mot secret aléatoire
  function genererMotSecret() {
    const idxAlea = getRandomNumber(mots.length)
    let mot = mots[idxAlea] // par exemple "fruit"
    // on le split pour le transformer en tableau 
    motSecret = mot.split("")
    console.log(motSecret)
  }

  function getRandomNumber(max){
    return Math.floor(Math.random() * max);
  }
  
  // Fonction pour vérifier les lettres devinées
  function verif() {
    const champProposition = document.getElementById("guess-input");
    const proposition = champProposition.value.toLowerCase();

    userWord = proposition.split("")
    console.log(userWord)

    for (let i=0; i<motSecret.length; i++){
        if (userWord[i] == motSecret[i]){
          console.log("c'est gagné ✨", userWord[i])
        } 
        else {
          if (motSecret.includes(userWord[i])){
            console.log("presque 😉",userWord[i])
           } else {
            console.log("lettre pas dans le mot", userWord[i])
         }
        }
      }
 }
