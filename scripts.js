
let table = document.createElement('table');
document.body.append(table);

let tr = document.createElement('tr');
let strin = document.createElement('th');
let tdName = document.createElement('th');
let tdAge = document.createElement('th');
let tdWealth = document.createElement('th');

tdName.innerText = "Name";
tdWealth.innerText = "Wealth";
tdAge.innerText = "Age";
strin.innerText = "ID"
tr.append(strin)
tr.append(tdName);
tr.append(tdAge);
tr.append(tdWealth);
table.append(tr);

fetch("./data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (const key in data) {
            let tr = document.createElement('tr');
            let  strin = document.createElement('td');
            
            let tdName = document.createElement('td');
            let tdAge = document.createElement('td');
            let tdWealth = document.createElement('td');
           
            strin.innerText = key;
            tdName.innerText = data[key].name;
            tdWealth.innerText = "$" + data[key].wealth;
            tdAge.innerText = data[key].age;
            tr.append(strin);
             tr.append(tdName);
            tr.append(tdAge);
            tr.append(tdWealth);
           
            table.append(tr);
        }
    });