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

var container = document.querySelector('#cardContainer');

courses.forEach((e)=>{
    container.innerHTML += `
    <div class="card">
        <img src="${e.image}" alt="" width="50%" height="50%">
        <h3 style="text-align: center;">${e.title}</h3>
        <div style = "
        display: flex; 
        align-items: center;
        justify-content: space-between; ">
            <p class="cat">${e.category}</p>
            <p>$${e.price}</p>
        </div>
    </div>
    `
})


function search_courses() {
    let input = document.getElementById('#searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('courses');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="Sorry, no courses with this title .";
        }
        else {
            x[i].container.innerHTML += `
            <div class="card">
                <img src="${e.image}" alt="" width="50%" height="50%">
                <h3 style="text-align: center;">${e.title}</h3>
                <div style = "
                display: flex; 
                align-items: center;
                justify-content: space-between; ">
                    <p class="cat">${e.category}</p>
                    <p class="pr">$${e.price}</p>
                </div>
            </div>
            `             
        }
    }
}

