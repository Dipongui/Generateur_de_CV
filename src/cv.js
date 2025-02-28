document.addEventListener("DOMContentLoaded", function(){
    let form1 = document.getElementById('form1');
    let vueChamp = {
        Nom_complet : document.getElementById('nom'),
        AgeForm1 : document.getElementById('age'),
        sexeForm1 : document.getElementById('sexe'),
        Titre_du_post : document.getElementById('poste'),
        situation_actuelle : document.getElementById('situation'),
        descriptionForm1 : document.getElementById('description'),
    };
    function MiseAjour(){
        for (let key in vueChamp) {
            vueChamp[key].textContent = localStorage.getItem(key) || "";
        }
    }
    form1.addEventListener("input", function(e) {
        localStorage.setItem(e.target.id, e.target.value);
        MiseAjour();
    });
    
    form1.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Les informations ont été enregistrées avec succès !");
    });
    
    MiseAjour();
})

document.addEventListener("DOMContentLoaded", function(){
    let form2 = document.getElementById('form2');
    let vueChamp2 = {
        adresse : document.getElementById('emailCordonne'),
        Num_tel : document.getElementById('numero'),
        Adresse_domicile : document.getElementById('adresseCordonnee'),
        
    };
    function MiseAjour2(){
        for (let key in vueChamp2) {
            vueChamp2[key].textContent = localStorage.getItem(key) || "";
        }
    }
    form2.addEventListener("input", function(e) {
        localStorage.setItem(e.target.id, e.target.value);
        MiseAjour2();
    });
    
    form2.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Les informations ont été enregistrées avec succès !");
    });
    
    MiseAjour2();
})

document.addEventListener("DOMContentLoaded", function(){
    let form4 = document.getElementById('form4');
    let vueChamp4 = {
        diplome_obtenu : document.getElementById('diplome'),
        etablissement : document.getElementById('ecole'),
        annee_obtention : document.getElementById('annee'),
        
        
    };
    function MiseAjour4(){
        for (let key in vueChamp4) {
            vueChamp4[key].textContent = localStorage.getItem(key) || "";
        }
    }
    form4.addEventListener("input", function(e) {
        localStorage.setItem(e.target.id, e.target.value);
        MiseAjour4();
    });
    
    form4.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Les informations ont été enregistrées avec succès !");
    });
    
    MiseAjour4();

    
})

function image() {
    const file = document.getElementById("tof").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("vueImg").src = e.target.result;
            localStorage.setItem("tof", e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

/*function Ajouter() {
    const container = document.getElementById("btnAdd");
    const previewContainer = document.getElementById("btAdd");
    
    // Récupérer et afficher la valeur du champ précédent
    if (container.children.length > 0) {
        const lastInput = container.lastElementChild;
        const lastValue = lastInput.value;
        if (lastValue.trim() !== "") {
            const newPreview = document.createElement("p");
            newPreview.textContent = lastValue;
            previewContainer.appendChild(newPreview);
            localStorage.setItem(`field_${container.children.length - 1}`, lastValue);
        }
    }
    
    // Ajouter un nouveau champ vide
    const newField = document.createElement("input");
    newField.type = "text";
    newField.className = "w-full border p-2 rounded mt-2";
    container.appendChild(newField);
}*/

function AddCoordonnee() {
    const container = document.getElementById("btnAddC");
    const previewContainer = document.getElementById("btAddC");
    
    // Récupérer et afficher la valeur du champ précédent
    if (container.children.length > 0) {
        const lastInput = container.lastElementChild;
        const lastValue = lastInput.value;
        if (lastValue.trim() !== "") {
            const newPreview = document.createElement("p");
            newPreview.textContent = lastValue;
            previewContainer.appendChild(newPreview);
            localStorage.setItem(`field_${container.children.length - 1}`, lastValue);
        }
    }
    
    // Ajouter un nouveau champ vide
    const newField = document.createElement("input");
    newField.type = "text";
    newField.className = "border border-stone-950 w-[400px] h-[50px] bg-gray-500"
    container.appendChild(newField);
}

function Addformation() {
    const container = document.getElementById("btnAddF");
    const previewContainer = document.getElementById("btAddF");
    
    // Récupérer et afficher la valeur du champ précédent
    if (container.children.length > 0) {
        const lastInput = container.lastElementChild;
        const lastValue = lastInput.value;
        if (lastValue.trim() !== "") {
            const newPreview = document.createElement("p");
            newPreview.textContent = lastValue;
            previewContainer.appendChild(newPreview);
            localStorage.setItem(`field_${container.children.length - 1}`, lastValue);
        }
    }
    
    // Ajouter un nouveau champ vide
    const newField = document.createElement("input");
    newField.type = "text";
    newField.className = "border border-stone-950 w-[400px] h-[50px] bg-purple-900";
    container.appendChild(newField);
}