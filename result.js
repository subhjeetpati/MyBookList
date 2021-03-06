let library

const DEFAULT_DATA = [
    { name: "The Lord of the Rings", author: "Tolkien",score: "9", status: "read" },
    {
      name: "Alice in Wonderland",
      author: "Lewis Caroll",
      score: "10",
      status: "not read",
    },
    { name: "Naruto", author: "Masashi Kishimoto",score:"5", status: "read" },
  ];

const $name = document.querySelector("#name")
const $author = document.querySelector('#author')
const $score = document.querySelector("#score")
const $status = document.querySelector("#status")
const $tableBody = document.querySelector('#book-table-body')

const $form = document.querySelector("form").addEventListener("submit",(e) => {
    e.preventDefault();
    addBookToLibrary();
    render();
    clearForm();
})

class Book{
    constructor(name, author, score, status)
    {
        this.name = name;
        this.author = author;
        this.score = score;
        this.status = status;
    }
}

const $table = document.querySelector("table").addEventListener("click",(e)=>{
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if(e.target.innerHTML == "delete"){
        if(confirm(`Are you sure you want to delete ${currentTarget.innerText}`))
            deleteBook(findBook(library,currentTarget.innerText))
    }
    if (e.target.classList.contains("status-button")) {
        changeStatus(findBook(library, currentTarget.innerText))
    }
    updateLocalStorage();
    render();
})

function addBookToLibrary() {
    if($name.value.length===0 || $author.value.length ===0 )
    {
        alert("Please, fill all the fields")
        return
    } 
    const newBook = new Book($name.value,$author.value,$score.value,$status.value) 
    library.push(newBook)  
    updateLocalStorage()
}

function clearForm() {
    $name.value = ""
    $author.value = ""
    $score.value = ""
}

function deleteBook(currentBook) {
    library.splice(currentBook, currentBook + 1);
}

function findBook(libraryArray, name) {
    if (libraryArray.length === 0 || libraryArray === null) {
      return;
    }
    for (book of libraryArray)
      if (book.name === name) {
        return libraryArray.indexOf(book);
      }
  }

function changeStatus(book) {
    if (library[book].status === "read") {
      library[book].status = "not read";
    } else library[book].status = "read";
}

function updateLocalStorage() {
    localStorage.setItem("library", JSON.stringify(library));
    //library = JSON.parse(localStorage.getItem("library"));
  }
  function checkLocalStorage() {
    if (localStorage.getItem("library")) {
      library = JSON.parse(localStorage.getItem("library"));
    } else {
      library = DEFAULT_DATA;
    }
  }

function render() {
    checkLocalStorage()
    $tableBody.innerHTML = ""
    library.forEach((book)=> {
        const htmlBook = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.score}</td>
            <td><button class="status-button">${book.status}</button></td>
            <td><button class="delete">delete</button></td>
        </tr>
        `
        $tableBody.insertAdjacentHTML("afterbegin",htmlBook)
    })
}

render()
