let nomVoiture = "Peugeot";
let x = 50;

let demoDiv = document.createElement('div');
demoDiv.id = "demo";
document.body.appendChild(demoDiv);

let z = 5;
let w = 10;

demoDiv.innerHTML = "z vaut " + z + ", w vaut " + w + ", le résultat est " + (z + w);

let d = z+w;
alert(d.toString());

let personne = function (sonPrenom, sonNom, sonAge){
    this.prenom = sonPrenom;
    this.nom = sonNom;
    this.age = sonAge;
}
let john = new personne('John', 'Doe', 35);

alert(10*5);

alert(10/2);

alert(15%9);

let l = 10;
let k = 5;
l = l + k

function maFonction (){
    alert('Salut tout le monde !');
}
window.onload = maFonction;

function maFonctionDeRetour (){
    document.getElementById('demoRetour').innerHTML = "Bonjour ! ";
}

let button = document.createElement('button');
button.id = 'monButton';
button.innerHTML = "alert";
document.body.appendChild(button);

button.addEventListener('click', function (){
    alert("j'ai clické sur le bouton");
})

let newDiv = document.createElement('div');
newDiv.id = "changeSurOver";
newDiv.style.width = "5vw";
newDiv.style.height = "5vh";
newDiv.style.border = "1px solid black";
document.body.appendChild(newDiv);
newDiv.addEventListener('mouseover', function (){
    newDiv.style.backgroundColor = "red";
})

let txt = "Toutes les heures blessent, la dernière tue.";
let txtLength = txt.length;

let str1 = "Bonjour";
let srt2 = "le monde !";
alert (str1 + " " + srt2);

let listeVoitures = [
    "Renault",
    "Volvo",
    "Citroen"
]

let maVoiture = listeVoitures[1];

listeVoitures[0] = "Ford";

alert(listeVoitures.length);

let noValue = listeVoitures.pop();

let newValue = listeVoitures.push('Ferrari');

let rNumber = Math.ceil(Math.random() * 10);

let fNumber = Math.round(15.7);

let nombreUn = 10;
let nombreDeux = 5;
if(nombreUn > nombreDeux){
    alert("nombreUn est supérieur à nombreDeux");
}

let nombreTrois = nombreQuatre = 10;
if(nombreTrois === nombreQuatre){
    alert("nombreTrois est égal à nombreQuatre");
}

if(nombreUn !== nombreDeux){
    alert("nombreUn n'est pas égal à nombreDeux");
}

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}

let fruits = [
    "pomme",
    "banane",
    "poire"
]

for(let i = 0 ; i < fruits.length ; i++){
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

i=0;
while (i < 10) {
    console.log(i);
    i+=2;
}

i=0;
while (i < 10) {
    if(i === 5){
        alert("i = " + i + " et ceci est la dernière reponse à la dernière question");
    }
    i++;
}
