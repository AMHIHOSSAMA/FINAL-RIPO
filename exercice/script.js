const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const price = document.getElementById('price');
const date = document.getElementById('date');
const email = document.getElementById('yourEmail');
let types = document.getElementsByClassName("booktpes");
var error = 0;


const petSelect = document.getElementById('pet-select');
var bookType = document.querySelector('input[name="typeradio"]:checked');
var table = document.getElementById("testings");
var formes = [];



//CLASS
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
     addData(){
        const crtElemnt = document.createElement("tr");

        //Validation
            error = 0;
        const titleValue = title.value.trim();
        const authorValue = author.value.trim();
        const priceValue = price.value.trim();
        const dateValue = date.value.trim();
        const petSelectValue = petSelect.value.trim();
        const emailValue = email.value.trim();
        
        
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

        if(emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
            error++;
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
            error++;
        } else {
            setSuccessFor(email);
        }

        //ERROR MESSAGE FORM
        function setErrorFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
        
            small.innerText = message;
        
            formControl.className = 'form-control error';
        }
        //SUCCESS MESSAGE FORM
        function setSuccessFor(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }


    if (error == 0) {

        crtElemnt.innerHTML = `
        <tr role="row" class="row">
            <td>${this.title}</td>
            <td>${this.author}</td>
            <td>${this.price}</td>
            <td>${this.date}</td>
            <td>${this.email}</td>
            <td>${this.petSelect}</td>
            <td>${this.types}</td>
            <td>
                <button onClick="onEdit(this)">Edit</button>
                <button onClick="onDelete(this)">Delete</button>
            </td>
        </tr>`
       
        table.appendChild(crtElemnt);

        title.value = "";
        author.value = "";
        price.value = "";
        date.value = "";
        email.value = "";
        petSelect.value = "";
        // storeBooks()

        // localStorage.setItem(title.value,author.value,price.value,date.value,email.value,petSelect.value,types.value)
        // location.reload()

        
       
    }
       
   }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const newForms = new Books(title.value, author.value, price.value, date.value, email.value, petSelect.value, bookType);
    newForms.addData();

    
    let formData = {
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            price: document.getElementById('price').value,
            date: document.getElementById('date').value,
            email: document.getElementById('yourEmail').value,
    }
    
   localStorage.setItem('formes',JSON.stringify(formes));
    localStorage.getItem('formes');
    
})



function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}