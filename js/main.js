"use strict"

//array che conterrà gli oggetti
 const people = [
    //oggetto 
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    //oggetto
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    //oggetto
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    //oggetto
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    //oggetto
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    //oggetto
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    }
 ];


 //ciclo for che cicla sull'array di oggetti 
 for( let i = 0; i < people.length; i++){
    const employees = people[i];

    //stampa i dati nella console
    // console.log (employees.name, employees.role, employees.image);

    //crea un <li> con all'interno i dati
    const listItem = `
        <li>
            <h3>${employees.name}</h3>
            <h4>${employees.role}</h4>
            <p>${employees.image}</p>
        </li>
    `;

    //stampa il <li> nel DOM 
    document.getElementById('list').innerHTML += listItem;
    
 }


 