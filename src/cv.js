//gestion de la section competence du code le travail se fera dans le form 3
//RECUPÉRARATION DE l'ID AJOUTER COMPETENCES
document.getElementById("ajouter_competences")
//RECUPERARTION DE L'ID AJOUTER NIVEAU DE COMPETENCE
document.getElementById("ajouter_niveau_competences")
//RECUPERATION DES LIEU DE STOCKAGE DES DIFFERENTS AJOUT DE L'UTILISATEUR
document.getElementById("niveau")
document.getElementById("competence")
//récupération des id des deud span qui contiendrons le niveau de competence
document.getElementById("niveau1")
document.getElementById("niveau2")
//récupération des id des boutons de modification et de validation
document.getElementById("valider_competence")
document.getElementById("modifier_competence")
//géneration de la fonction onclick au niveau du bouton d'ajout
document.getElementById("valider_competence").onclick = () => {
    /*if(document.getElementById("ajouter_competences").value !== Null ||document.getElementById("ajouter_niveau_competences").value !== Null ){
        for(var i=document.getElementById("competence").value ){}
    }*/
}
//création de L'objet pour le local storage
const COMPETENCE ={}


//gestion de la section ajouter une langue
//get id de L'input pour la langue
document.getElementById("input_langue")
//get de la span pour la langue
document.getElementById("langue")
//get la span pour l'err de la langue
document.getElementById("err13")
//get les boutons de modification et d'ajout pour la langue
document.getElementById("valider_langue")
document.getElementById("modifier_langue")
//gestion du local storage
validlangue=false 
document.getElementById("valider_langue").onclick =() => { 
     if (document.getElementById("input_langue").value.trim()===""){
        document.getElementById("err13").innerHTML="veeillez d'abords entrer une langue";
        document.getElementById("err13").style.color="red";
        validlangue=false 
     }else{
        const newlangue =document.createElement('div');
        newlangue.classList.add('newspan');
        newlangue.innerHTML = document.getElementById("input_langue").value.trim();
        document.getElementById("langue").appendChild(newlangue);
        document.getElementById("input_langue").value=""
        validlangue=true;
    }
    const Langue_exist =document.querySelectorAll('.newspan')
    for (let Langue of Langue_exist) {
        if (Langue.innerHTML === valeur) {
            document.getElementById("err13").innerHTML='Vous avez deja inséré cette langue';
            input.value = ''; // Réinitialiser le champ de saisie
            return;
        }
    }
    if(validlangue=true){
        const linguage ={
            input_langue: document.getElementById("input_langue").value.trim()
        }
        localStorage.Setitem()
    }
 }   
//gestion du bouton de modification
document.getElementById("modifier_langue").onclick =() =>{
    if (  validlangue!=false ){
        document.getElementById("input_langue").value = `${LANGUE.Mylangue.value} `
    }
}
//gestion de la section ajouter experience pro
document.getElementById("date_debut_fin")
//get les id des inputs date
document.getElementById("fin_experience")
document.getElementById("debut_expérience")
//get les id des inputs des ajouts d'experience
document.getElementById("ajouter_experience")
//get les id des span pour l'experiencenomEntreprise
document.getElementById("nomEntreprise")
//get les id des boutons de validation de l,experience professionnelle
document.getElementById("valider_expérience")
document.getElementById("modifier_expérience")
//gestion du local storage

//gestion des centres d'interets 
//get id de L'input de l,ajout du centre d'interet
document.getElementById("centre_d'interets")
//get de la span pour l,ajout du centre d'interet
document.getElementById("loisirs")
//get la span pour l'err de l,ajout du centre d'interet
document.getElementById("err17")
//get les id des boutons de validation de l'ajout du centre d'interet
document.getElementById("modifier_centre_d'interet")
document.getElementById("modifier_centre_d'interet")
//gestion du local storage



//gestion des references
//get id de L'input pour des references
document.getElementById("ajouter_reference")
//get de la span pour des references
document.getElementById("nomRef")
//get la span pour l'err des references
document.getElementById("err18")
//get les boutons de modification et d'ajout pour des references
document.getElementById("valider_reference")
document.getElementById("modifier reference")
//gestion du local storage


//il s'agira de gerer l'ajout des global des document du cv et le telechargement
 
