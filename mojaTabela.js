let keys = [//"id",
 "make", "model", "price", "year", "body", "fuel"]
    let data = [
        {
            // "id": "1",
            "make": "Audi",
            "model": "A4",
            "price": "15000",
            "year": "2013",
            "body": "Sedan",
            "fuel": "Diesel",
        },
        {
            // "id": "2",
            "make": "BMW",
            "model": "5",
            "price": "30000",
            "year": "2018",
            "body": "Sedan",
            "fuel": "Diesel",
        },
        {
            // "id": "1",
            "make": "Audi",
            "model": "A4",
            "price": "15000",
            "year": "2013",
            "body": "Sedan",
            "fuel": "Diesel",
        },
        {
            // "id": "2",
            "make": "BMW",
            "model": "5",
            "price": "30000",
            "year": "2018",
            "body": "Sedan",
            "fuel": "Diesel",
        }
    ]


var tabela = document.createElement('table');
for (var i = 0; i < data.length; i++){
    var tr = document.createElement('tr');   

    // var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');

    // var text1 = document.createTextNode(data[i].id);
    var text2 = document.createTextNode(data[i].make);
    var text3 = document.createTextNode(data[i].model);
    var text4 = document.createTextNode(data[i].price);
    var text5 = document.createTextNode(data[i].year);
    var text6 = document.createTextNode(data[i].body);
    var text7 = document.createTextNode(data[i].fuel);

    // td1.appendChild(text1);     tr.appendChild(td1);
    td2.appendChild(text2);     tr.appendChild(td2);
    td3.appendChild(text3);     tr.appendChild(td3);
    td4.appendChild(text4);     tr.appendChild(td4);
    td5.appendChild(text5);     tr.appendChild(td5);
    td6.appendChild(text6);     tr.appendChild(td6);
    td7.appendChild(text7);     tr.appendChild(td7);
    
    tabela.appendChild(tr);
}

var tabelala = document.getElementById('tabelala')
tabelala.appendChild(tabela);


const f = document.getElementById('addButton')

f.addEventListener('click', function(){

    var tabela = document.getElementById('tabelala')
    var tr = document.createElement('tr');   

    // var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');

    let polje;
    // const id = document.createTextNode('1')
    polje = document.querySelector('#make')
    const make = document.createTextNode(polje.value)
    polje = document.querySelector('#model')
    const model = document.createTextNode(polje.value)
    polje = document.querySelector('#price')
    const price = document.createTextNode(polje.value)
    polje = document.querySelector('#year')
    const year = document.createTextNode(polje.value)
    polje = document.querySelector('#body')
    const body = document.createTextNode(polje.value)
    polje = document.querySelector('#fuel')
    const fuel = document.createTextNode(polje.value)

    // td1.appendChild(id);       tr.appendChild(td1);
    td2.appendChild(make);     tr.appendChild(td2);
    td3.appendChild(model);    tr.appendChild(td3);
    td4.appendChild(price);    tr.appendChild(td4);
    td5.appendChild(year);     tr.appendChild(td5);
    td6.appendChild(body);     tr.appendChild(td6);
    td7.appendChild(fuel);     tr.appendChild(td7);

    tabela.appendChild(tr);
})