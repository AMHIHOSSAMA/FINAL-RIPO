
const title = document.getElementById('title');
const author = document.getElementById('author');
const price = document.getElementById('price');
const date = document.getElementById('date');
const email = document.getElementById('yourEmail');
let types = document.getElementsByClassName("booktpes");
var error = 0;

if (bookType == true) {
    
}

const petSelect = document.getElementById('pet-select');
var bookType = document.querySelector('input[name="typeradio"]:checked');
var table = document.getElementById("testings");
var formes = [];



class Books {
    constructor(title, author, price, date, email, petSelect, bookType) {

        this.title = title;
        this.author = author;
        this.price = price;
        this.date = date;
        this.email = email;
        this.petSelect = petSelect;
        this.bookType = bookType;
    }
}



let hh = () => {
    for (let i = 0; i < types.length; i++) {
        if (types[i].checked) {
            var hh = types[i].value;
        }
    }

    var fos = new Books(title.value, author.value, price.value, date.value, email.value, petSelect.value, hh);
    



    error = 0;
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const priceValue = price.value.trim();
    const dateValue = date.value.trim();
    const petSelectValue = petSelect.value.trim();

    if (titleValue === '') {
        setErrorFor(title, 'le titre ne peu etre pas vide');
        error++;
    } else if (title.value.length > 20) {
        setErrorFor(title, 'le titre ne peu etre pas plus de 20 lettres')
        error++;
    } else if (title.value.length < 4) {
        setErrorFor(title, 'le titre ne peu etre pas moin de 4 lettres')
        error++;
    } else {
        setSuccessFor(title)
    }

    if (bookType == true) {
        setSuccessFor(title)
    } else if (bookType == false) {
        setErrorFor(bookType, 'Choisir le type de livre')
        error++;
    }
    

    if (authorValue === '') {
        setErrorFor(author, 'le nom d\'author ne peu etre pas vide');
        error++;
    } else if (author.value.length > 20) {
        setErrorFor(author, 'le nom d\'author ne peu etre pas plus de 20 lettres');
        error++;
    } else if (author.value.length < "4") {
        setErrorFor(author, 'le nom d\'author ne peu etre pas moin de 4 lettre');
        error++;
    } else {
        setSuccessFor(author);
    }

    if (priceValue === '') {
        setErrorFor(price, 'Ajouter le prix de livre');
        error++;
    } else if (Number(price.value < 0)) {
        setErrorFor(price, 'le prix ne peu etre pas moin de 0dh');
        error++;
    } else if (Number(price.value > 500)) {
        setErrorFor(price, 'le prix ne peu etre pas moin de 500dh ');
        error++;
    } else {
        setSuccessFor(price);
    }

    if (dateValue === '') {
        setErrorFor(date, 'Remplir la date de publication');
        error++;
    } else {
        setSuccessFor(date)
    }
    if (petSelect.value == '') {
        setErrorFor(petSelect, 'Choisir la language de livre');
        error++;
    } else {
        setSuccessFor(petSelect);
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
    
        small.innerText = message;
    
        formControl.className = 'form-control error';
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }


    formes.push(fos);
    /*
    title.value = "";
    author.value = "";
    price.value = "";
    date.value = "";
    email.value = "";
    petSelect.value = "";
    hh;
    */

    for (var i = 0; i < formes.length; i++) {
        if (error == 0) {
    var row = table.insertRow(-1);
     var cell = row.insertCell(0);
     cell.innerHTML = formes[i].title;

    
     var cell1 = row.insertCell(1);
     cell1.innerHTML = formes[i].author;

    
     var cell2 = row.insertCell(2);
     cell2.innerHTML = formes[i].price;

   
     var cell4 = row.insertCell(3);
     cell4.innerHTML = formes[i].date;

     var cell5 = row.insertCell(4);
     cell5.innerHTML = formes[i].email;

     var cell6 = row.insertCell(5);
     cell6.innerHTML = formes[i].petSelect;

     var cell7 = row.insertCell(6);
     cell7.innerHTML = formes[i].bookType;

     var cell8 = row.insertCell(7);
        cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
                       
        title.value = "";
    author.value = "";
    price.value = "";
    date.value = "";
    email.value = "";
    petSelect.value = "";
    hh;               
     }
     
    }
    
     localStorage.setItem("title",title.value);
    console.log(localStorage.getItem('title'))
}



