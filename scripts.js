let button = document.querySelector('button');
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let wealthInput = document.querySelector('#wealth');

let table = document.createElement('table');
document.body.append(table);

let tr = document.createElement('tr');
let tdName = document.createElement('th');
let tdAge = document.createElement('th');
let tdWealth = document.createElement('th');
let tdActions = document.createElement('th');
tdName.innerText = "Name";
tdWealth.innerText = "Wealth";
tdAge.innerText = "Age";
tdActions.innerText = "Actions";
tr.append(tdName);
tr.append(tdAge);
tr.append(tdWealth);
tr.append(tdActions);
table.append(tr);

button.addEventListener('mousedown', function () {
    let person = {
        name: nameInput.value,
        age: ageInput.value,
        wealth: wealthInput.value,
    };
    fetch(`https://it-academy-ayax-table-default-rtdb.firebaseio.com/people.json`, {
            method: "POST",
            body: JSON.stringify(person)
        })
        .then(function (response) {
            return response.json(person);
        })
        .then(function (data) {
            addPerson(data.name, person);
        })
});

fetch(`https://it-academy-ayax-table-default-rtdb.firebaseio.com/people.json`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (const key in data) {
            if (!data[key]) continue;

            addPerson(key, data[key]);
        }
    });

function addPerson(key, person) {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdAge = document.createElement('td');
    let tdWealth = document.createElement('td');
    let tdActions = document.createElement('td');
    let deleteButton = document.createElement('button');
    tdName.innerText = person.name;
    tdWealth.innerText = "$" + person.wealth;
    tdAge.innerText = person.age;
    deleteButton.innerText = 'Delete';
    tdActions.append(deleteButton);
    deleteButton.addEventListener('mousedown', function () {
        fetch(`https://it-academy-ayax-table-default-rtdb.firebaseio.com/people/${key}.json`, {
                method: "DELETE"
            })
            .then(function (response) {
                tr.remove();
            })
    });
    tr.append(tdName);
    tr.append(tdAge);
    tr.append(tdWealth);
    tr.append(tdActions);
    table.append(tr);
}