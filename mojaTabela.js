let keys = ["id", "make", "model", "price", "year", "body", "fuel"]
let data = [
        {
            "id": "1",
            "make": "Audi",
            "model": "A4",
            "price": "15000",
            "year": "2013",
            "body": "Sedan",
            "fuel": "Diesel",
        },
        {
            "id": "2",
            "make": "BMW",
            "model": "5",
            "price": "30000",
            "year": "2018",
            "body": "Sedan",
            "fuel": "Diesel",
        },
        {
            "id": "3",
            "make": "Audi",
            "model": "A4",
            "price": "15000",
            "year": "2013",
            "body": "Sedan",
            "fuel": "Diesel",
        },
        {
            "id": "4",
            "make": "BMW",
            "model": "5",
            "price": "30000",
            "year": "2018",
            "body": "Sedan",
            "fuel": "Diesel",
        }
    ]
    

incrementCounter = (function() {
    let counter = data.length;
    return function() {
        counter++;
        return counter;
    }
})();


var tabela = document.createElement('table');
var tabelala = document.getElementById('tabelala')
tabelala.appendChild(tabela);
tabelaOdNiza();


function tabelaOdNiza(){
    tabela.innerHTML = "";
    for (var i = 0; i < data.length; i++){
        var tr = document.createElement('tr');   

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');

        var text1 = document.createTextNode(data[i].id);
        var text2 = document.createTextNode(data[i].make);
        var text3 = document.createTextNode(data[i].model);
        var text4 = document.createTextNode(data[i].price);
        var text5 = document.createTextNode(data[i].year);
        var text6 = document.createTextNode(data[i].body);
        var text7 = document.createTextNode(data[i].fuel);

        td1.appendChild(text1);     tr.appendChild(td1);
        td2.appendChild(text2);     tr.appendChild(td2);
        td3.appendChild(text3);     tr.appendChild(td3);
        td4.appendChild(text4);     tr.appendChild(td4);
        td5.appendChild(text5);     tr.appendChild(td5);
        td6.appendChild(text6);     tr.appendChild(td6);
        td7.appendChild(text7);     tr.appendChild(td7);
        
        tabela.appendChild(tr);
    }
}

const f = document.getElementById('addButton')

f.addEventListener('click', function(){

    data.push({
        "id" : incrementCounter(),
        "make": document.querySelector('#make').value,
        "model": document.querySelector('#model').value,
        "price": document.querySelector('#price').value,
        "year": document.querySelector('#year').value,
        "body": document.querySelector('#body').value,
        "fuel": document.querySelector('#fuel').value
    });

    tabelaOdNiza();

})
