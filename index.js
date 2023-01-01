var courses = [{
    image: './img/javascriptOverview.png',
    title: 'what Is Javascript?',
    category: 'JS',
    price: 9.9
},
{
    image: './img/htmlBasics.PNG',
    title: 'Basics Of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: './img/htmlElements.png',
    title: 'HTML Elements And Tags',
    category: 'HTML',
    price: 9.9
},
{
    image: './img/cssSelectors.jpg',
    title: 'CSS Selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: './img/javascriptVariables.png',
    title: 'Variables And Data Type Of Javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './img/javascriptOperators.png',
    title: 'Javascript Operators And Conditions',
    category: 'JS',
    price: 29.9
},
{
    image: './img/htmlAttrVal.jpg',
    title: 'HTML Attributes And Values',
    category: 'HTML',
    price: 19.9
},
{
    image: './img/cssProperties.png',
    title: 'CSS Properties',
    category: 'CSS',
    price: 29.9
},
{
    image: './img/javascriptObjects.png',
    title: 'Javascript Objects And Arrays',
    category: 'JS',
    price: 39.9
},
{
    image: './img/cssMesures.png',
    title: 'Mesures And Unites Of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: './img/cssAnimation.png',
    title: 'CSS Animations',
    category: 'CSS',
    price: 19.9
},
{
    image: './img/javascriptFunctions.png',
    title: 'The Basics Of Javascript',
    category: 'JS',
    price: 29.9
},
{
    image: './img/javascriptEvents.png',
    title: 'Javascript Events',
    category: 'JS',
    price: 59.9
},
{
    image: './img/cssColors.png',
    title: 'Css Colors',
    category: 'css',
    price: 29.9
},
{
    image: './img/phpBasics.png',
    title: 'Getting Started With Php',
    category: 'php',
    price: 15.9
},
{
    image: './img/javascriptFunctions2.png',
    title: 'Functions And Loops With Javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './img/phpDataBase.png',
    title: 'Connecting To Database Using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: './img/phpCRUD.png',
    title: 'Manipulating Crud Using Php',
    category: 'php',
    price: 45.9
},
{
    image: './img/javascriptDOM.png',
    title: 'DOM The Power Of Javascript',
    category: 'JS',
    price: 23.9
}
];

var random = Math.floor(Math.random() * courses.length);
var random2 = Math.floor(Math.random() * courses.length);
var random1 = Math.floor(Math.random() * courses.length);
var image1 = document.getElementById("leftItemImg");
var image3 = document.getElementById("centerItemImg");
var image2 = document.getElementById("rightItemImg");

document.getElementById("leftItemH2").innerHTML =
courses[random1].title;
document.getElementById("centerItemH2").innerHTML =
courses[random2].title;
document.getElementById("rightItemH2").innerHTML =
courses[random].title;
document.getElementById("price").innerHTML =
courses[random1].price;
document.getElementById("price2").innerHTML =
courses[random2].price;
document.getElementById("price3").innerHTML =
courses[random].price;

image1.src = courses[random1].image;
image2.src = courses[random].image;
image3.src = courses[random2].image;


function aleatoire() {
  
 var random = Math.floor(Math.random() * courses.length);
 var random2 = Math.floor(Math.random() * courses.length);
 var random1 = Math.floor(Math.random() * courses.length);
 var image1 = document.getElementById("leftItemImg");
 var image2 = document.getElementById("rightItemImg");
 var image3 = document.getElementById("centerItemImg");
 document.getElementById("leftItemH2").innerHTML =
 courses[random1].title;
 document.getElementById("price").innerHTML ='$'+
 courses[random1].price;
 document.getElementById("centerItemH2").innerHTML =
 courses[random2].title;
 document.getElementById("price2").innerHTML ='$'+
 courses[random2].price;
 document.getElementById("rightItemH2").innerHTML =
 courses[random].title;
 document.getElementById("price3").innerHTML ='$'+
 courses[random].price;

 
 image1.src = courses[random1].image;
 image2.src = courses[random].image;
 image3.src = courses[random2].image;

 image1.setAttribute('class','test')
}
setInterval(aleatoire, 3000);