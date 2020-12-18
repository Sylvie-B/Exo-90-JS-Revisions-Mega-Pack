let nomVoiture = "Peugeot";
let x = 50;

let demoDiv = document.createElement('div');
demoDiv.id = "demo";
document.body.appendChild(demoDiv);

let z = 5;
let w = 10;

demoDiv.innerHTML = "z vaut " + z + ", w vaut " + w + ", le résultat est " + (z + w);

let d = z+w;
// alert(d.toString());

let personne = function (sonPrenom, sonNom, sonAge){
    this.prenom = sonPrenom;
    this.nom = sonNom;
    this.age = sonAge;
}
let john = new personne('John', 'Doe', 35);

// alert(10*5);
//
// alert(10/2);
//
// alert(15%9);

let l = 10;
let k = 5;
l = l + k

// function maFonction (){
//     alert('Salut tout le monde !');
// }
// window.onload = maFonction;

function maFonctionDeRetour (){
    document.getElementById('demoRetour').innerHTML = "Bonjour ! ";
}

let button = document.createElement('button');
button.id = 'monButton';
button.innerHTML = "alert";
document.body.appendChild(button);

button.addEventListener('click', function (){
    alert();
})

let newDiv = document.createElement('div');
newDiv.id = "changeSurOver";
newDiv.style.height = "5vh";
newDiv.style.border = "1px solid black";
document.body.appendChild(newDiv);
newDiv.addEventListener('mouseover', function (){
    newDiv.style.backgroundColor = "red";
})
