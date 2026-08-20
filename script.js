// Anti retour
history.pushState(null, null, window.location.href);

window.onpopstate = function () {
  history.go(1);
};

// Vérification du mot de passe
function verifierMotDePasse() {
  const motDePasseCorrect = "FITIAVANA";
  const motDePasseSaisi = document.getElementById("password").value;

  if (motDePasseSaisi === motDePasseCorrect) {
    sessionStorage.setItem("authentifie", "true");

    document.querySelector(".overlay").style.backdropFilter = "blur(0px)";
    document.querySelector(".overlay").style.background = "transparent";

    setTimeout(() => {
      window.location.href = "main.html";
    }, 500);
  } else {
    document.getElementById("message").textContent =
      "Mot de passe incorrect !";
    document.getElementById("message").style.color = "red";
  }
}

// Changement de texte et couleur
document.addEventListener("DOMContentLoaded", function () {
  const changer = document.getElementById("changer");
  const texte = document.getElementById("texte");

  const phrases = [
    "Le soleil brille aujourd'hui !",
    "Apprendre, c'est grandir.",
    "Le savoir est une force.",
    "Chaque jour est une nouvelle opportunité.",
    "Rien n'est impossible avec de la volonté."
  ];

  const couleurs = [
    "red",
    "green",
    "blue",
    "purple",
    "orange",
    "pink",
    "brown"
  ];

  function genererCouleursDifferentes() {
    let couleurFond;
    let couleurTexte;

    do {
      couleurFond =
        couleurs[Math.floor(Math.random() * couleurs.length)];

      couleurTexte =
        couleurs[Math.floor(Math.random() * couleurs.length)];
    } while (couleurFond === couleurTexte);

    return {
      couleurFond,
      couleurTexte
    };
  }

  if (changer && texte) {
    changer.addEventListener("click", function () {
      const couleursChoisies = genererCouleursDifferentes();

      texte.style.color = couleursChoisies.couleurTexte;
      texte.style.backgroundColor = couleursChoisies.couleurFond;

      texte.textContent =
        phrases[Math.floor(Math.random() * phrases.length)];
    });
  }
});