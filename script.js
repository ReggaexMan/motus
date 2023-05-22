// Tableau de mots à deviner
const mots = [
    "arbre",
    "livre",
    "table",
    "maison",
    "chien",
    "chat",
    "voiture",
    "soleil",
    "fleur",
    "fruit"
  ];
  
  // Mot secret
  let motSecret = "";
  
  // Nombre maximum de tentatives
  const maxTentatives = 10;
  
  // Lettres devinées
  let lettresDevinees = [];
  
  // Fonction pour générer un mot secret aléatoire
  function genererMotSecret() {
    const motsCinqLettres = mots.filter(mot => mot.length === 5);
    const indexAleatoire = Math.floor(Math.random() * motsCinqLettres.length);
    motSecret = motsCinqLettres[indexAleatoire];
  }
  
  // Fonction pour vérifier les lettres devinées
  function verifierProposition() {
    const champProposition = document.getElementById("guess-input");
    const proposition = champProposition.value.toLowerCase();
    champProposition.value = "";
  
    if (proposition.length === 5) {
      let indice = "";
  
      for (let i = 0; i < proposition.length; i++) {
        if (proposition[i] === motSecret[i]) {
          indice += proposition[i].toUpperCase();
        } else if (motSecret.includes(proposition[i])) {
          indice += proposition[i];
        } else {
          indice += "-";
        }
      }
  
      document.getElementById("clue").textContent = indice;
  
      if (proposition === motSecret) {
        document.getElementById("result").textContent = "Bravo, vous avez trouvé le mot !";
        document.getElementById("submit-button").disabled = true;
      } else {
        lettresDevinees.push(proposition);
        const tentativesRestantes = maxTentatives - lettresDevinees.length;
        if (tentativesRestantes === 0) {
          document.getElementById("result").textContent = "Vous avez épuisé toutes vos tentatives. Le mot était : " + motSecret;
          document.getElementById("submit-button").disabled = true;
        } else {
          document.getElementById("result").textContent = "Il vous reste " + tentativesRestantes + " tentative(s).";
        }
      }
    }
  }
  
  // Fonction d'initialisation du jeu
  function initialiserJeu() {
    genererMotSecret();
    console.log("Mot secret :", motSecret); // Pour des fins de débogage, à supprimer par la suite
  
    const boutonSoumettre = document.getElementById("submit-button");
    boutonSoumettre.addEventListener("click", verifierProposition);
  }
  
  // Appel de la fonction d'initialisation du jeu au chargement de la page
  window.addEventListener("load", initialiserJeu);
  