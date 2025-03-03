
let recettes = [
    {
        nom: "Crêpes",
        auteur: "Marmiton",
        ustensiles: ["louche", "poêle", "saladier", "fouet"],
        temps: 10,
        nombre: 4,
        vegan: false,
        ingredients: [
            "50g de beurre fondu",
            "3 oeufs",
            "300g de farine",
            "3 cuillères à soupe de sucre",
            "60cl de lait",
            "2 cuillères à soupe d'huile"
        ],
        photo: "crepes.jpg",
        preparation: [
            "Mettre la farine et former un puits.",
            "Y déposer les oeufs entiers, le sucre, l'huile et le beurre.",
            "Mélanger délicatement avec un fouet en ajoutant au fur et à mesure le lait. La pâte ainsi obtenue doit avoir une consistance d'un liquide légèrement épais.",
            "Faire chauffer une poêle antiadhésive et la huiler très légèrement à l'aide d'un papier Essuie-tout. Y verser une louche de pâte, la répartir dans la poêle puis attendre qu'elle soit cuite d'un côté avant de la retourner. Cuire ainsi toutes les crêpes à feu doux."
        ]
    },
    {
        nom: "Gâteau au Chocolat",
        auteur: "Marmiton",
        ustensiles: ["moule", "saladier", "fouet", "four"],
        temps: 40,
        nombre: 6,
        vegan: false,
        ingredients: [
            "200g de chocolat noir",
            "100g de beurre",
            "100g de sucre",
            "3 oeufs",
            "50g de farine"
        ],
        photo: "gateau_chocolat.jpeg",
        preparation: [
            "Préchauffez votre four à 180°C (thermostat 6). Dans une casserole, faites fondre le chocolat et le beurre coupé en morceaux à feu très doux.",
            "Dans un saladier, ajoutez le sucre, les oeufs, la farine. Mélangez.",
            "Ajoutez le mélange chocolat/beurre. Mélangez bien.",
            "Beurrez à l'aide d'une feuille de papier essuie-tout et farinez votre moule puis y versez la pâte à gâteau.",
            "Faites cuire au four environ 20 minutes. A la sortie du four le gâteau ne paraît pas assez cuit. C'est normal, laissez-le refroidir puis démoulez- le."
        ]
    }
];


function creerCarte(recette) {
    let carte = document.createElement("div");
    carte.className = "carte";


    let gauche = document.createElement("div");
    gauche.className = "gauche";

    let titre = document.createElement("h1");
    titre.textContent = recette.nom;
    gauche.appendChild(titre);

    let image = document.createElement("img");
    image.src = recette.photo;
    image.alt = recette.nom;
    gauche.appendChild(image);

    let temps = document.createElement("p");
    temps.innerHTML = `<strong>Temps :</strong> ${recette.temps} minutes`;
    gauche.appendChild(temps);

    let nombre = document.createElement("p");
    nombre.innerHTML = `<strong>Nombre :</strong> ${recette.nombre} personnes`;
    gauche.appendChild(nombre);

    let vegan = document.createElement("p");
    vegan.innerHTML = `<strong>Vegan :</strong> ${recette.vegan ? "Oui" : "Non"}`;
    gauche.appendChild(vegan);


    let droite = document.createElement("div");
    droite.className = "droite";

    let ingredientsTitre = document.createElement("p");
    ingredientsTitre.innerHTML = "<strong>Ingrédients :</strong>";
    droite.appendChild(ingredientsTitre);

    let ingredientsListe = document.createElement("ul");
    recette.ingredients.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ingredientsListe.appendChild(li);
    });
    droite.appendChild(ingredientsListe);

    let preparationTitre = document.createElement("p");
    preparationTitre.innerHTML = "<strong>Préparation :</strong>";
    droite.appendChild(preparationTitre);

    let preparationListe = document.createElement("ol");
    recette.preparation.forEach(etape => {
        let li = document.createElement("li");
        li.textContent = etape;
        preparationListe.appendChild(li);
    });
    droite.appendChild(preparationListe);


    carte.appendChild(gauche);
    carte.appendChild(droite);

    return carte;
}


function afficherCartes() {
    let conteneur = document.getElementById("conteneur-cartes");
    conteneur.innerHTML = ""; 

    recettes.forEach(recette => {
        let carte = creerCarte(recette);
        conteneur.appendChild(carte);
    });
}

function changerAffichage() {
    let conteneur = document.getElementById("conteneur-cartes");
    conteneur.classList.toggle("mosaique");

    let bouton = document.querySelector("button");
    if (conteneur.classList.contains("mosaique")) {
        bouton.textContent = "Changer en mode Carrousel";
    } else {
        bouton.textContent = "Changer en mode Mosaïque";
    }
}


window.onload = afficherCartes;