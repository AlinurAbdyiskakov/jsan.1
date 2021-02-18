let ul = document.createElement('ul');
document.body.append(ul);
fetch("./data.json")
.then(function(response){
  return response.json();
})
.then(function(data){
 for (const key in data) {
    let li = document.createElement('li');
    li.innerText = data[key].name + "-" + "$" + data[key].wealth;
    ul.append(li);
}
})



