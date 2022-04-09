
//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const title = document.getElementById('title');
const daysList1 = document.getElementById('daysList1');
const daysList2 = document.getElementById('daysList2');
const daysList3 = document.getElementById('daysList3');
const title1= document.getElementById('title1');
const title2= document.getElementById('title2');
const title3= document.getElementById('title3');
const title4= document.getElementById('title4');
const selectDays = document.getElementById('daysSelect');


//--------------------------------------------
// Insertar elementos de forma incorrecta usando "for" e "innerHtml"

const itemList= document.createElement('LI');
// itemList.textContent= 'lunes';
// daysList1.appendChild(itemList),
// console.log(itemList);

title.innerHTML= 'DOM - <span>Crear e insertar elementos Parte I</span>';
console.log(title);

title1.textContent= 'Insertar elementos de forma incorrecta usando "for" e "innerHtml"'
for (const day of days) {
    //Esto no funciona (LunesMartesMiércolesJuevesViernesSábadoDomingo)
    // itemList.textContent += `${day}`;
    itemList.innerHTML += `<li>${day}</li>`;
    daysList1.appendChild(itemList);    
}

//--------------------------------------------
// Insertar elementos de forma correcta usando "fragment" e "textContent" utilizando un "for of"

const fragment= document.createDocumentFragment();

title2.textContent= 'Isertar elementos de forma correcta usando "fragment" y "textContent" utilizando un "for of"';
for (const day of days) {
    const itemList= document.createElement('LI');
    itemList.textContent= day;
    fragment.appendChild(itemList);
}
daysList2.appendChild(fragment);

//--------------------------------------------
// Con "forEach" hago la misma insercion que con un "for of"

title3.textContent= 'Con "forEach" hago la misma insercion que con un "for of"';

days.forEach((day) =>{
    const itemList= document.createElement('LI');
    itemList.textContent= day;
    fragment.appendChild(itemList);
});
daysList3.appendChild(fragment);

//--------------------------------------------
// Crear e insertar elemento a una LISTA SELECT

title4.textContent= 'Crear e insertar elemento a una LISTA SELECT';

//usamos la misma constante de fragmento, por ahora no ha afectado la continuidad del codigo, ?¿Porque?¿

for (const day of days) {
    const itemOption= document.createElement('OPTION');
    itemOption.value= day.toLowerCase();
    //Otra opcion para el "value"
    //itemOption.setAttribute('value', day.toLowerCase());
    itemOption.textContent= day;
    fragment.appendChild(itemOption);
}

selectDays.appendChild(fragment);




