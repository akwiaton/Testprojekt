let names = ['Erica Mustermann', 'John Doe'];
let phoneNumbers = ['0156898555', '01684255852'];
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = ' ';
    content.innerHTML += `<h1>My Contacts</h1>`;
    content.innerHTML += `
    <div>
        <input placeholder="Name" id="name">
        <input placeholder="Telefon" id="phone">
        <button onclick="addContact()">Hinzufügen</button>
    </div>
    `;
 
   
    for (let i=0; i < names.length; i++) { 
        const name = names[i];
        const phoneNumber =  phoneNumbers[i];

        content.innerHTML  += `
        <div class= "card">
        <b>Name: </b>  ${name}<br />
        <b>Telefon: </b> ${phoneNumber}<br />
        <button onclick="deleteContact(${i})">Löschen</button>
        </div>
        `;

    }
   
}

function addContact(){
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');

    names.push (name.value); //  Hinzufügen des Namen zu Array Namen
    phoneNumbers.push (phone.value); // Hinzufügen des Telefon zu Array phoneNumbers

    render();
    save();
}
function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    render();
    save();

}
// Variablen speichern in Local Storage mit JSON.stringify

function save(){
    let namesasText = JSON.stringify(names); // Array value wird zum Text umgewandelt 
    localStorage.setItem('names', namesasText); // Text im Local Storage speichern

    let  phoneNumbersasText = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbers', phoneNumbersasText);
}
// zur Überprüfen DEV Tools - Application - Local Storage

// Variablen aus der Storage rausladen und den Text in Array umwandeln

function load() {
    let namesasText = localStorage.getItem('names');
    let  phoneNumbersasText = localStorage.getItem('phoneNumbers') ;

    names = JSON.parse(namesasText); // Text in Array umwandeln
    phoneNumbers = JSON.parse(phoneNumbersasText);
    if (namesasText && phoneNumbersasText) { // if abfrage - wir testen ob nameastext und phoneastext in local storage existieren und nur wenn der Text vorhanden ist wird die funktion aufgerufen. 
        names = JSON.parse(namesasText);
        phoneNumbers = JSON.parse(phoneNumbersasText);
    }
}
