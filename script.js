let counter = 1

let Library = []

function Book(counter,name, score) 
{
    this.counter = counter
    this.name = name
    this.score = score    
}

function storeBookInLibrary()
{
    let bookDetails = document.getElementById("form")
    const book = new Book(counter,bookDetails.elements[0].value,bookDetails.elements[1].value)
    Library.push(book)
    counter++;
    displayLibrary()
}

function displayLibrary() 
{
    let bookTable = "<tr><th>S.No. </th> <th>Name</th> <th>Score </th> </tr>"
    for(let i=0;i<Library.length;i++)
    {
        let name = "<tr>"
        name += "<td> " + Library[i].counter +"." + "</td>"
        name += "<td> " + Library[i].name  + "</td>"
        name += "<td> " + Library[i].score + "</td>"
        name += "</tr>"

        bookTable += name
    }
    document.getElementById("bookList").innerHTML = bookTable;
}

document.getElementById("addBookBtn").addEventListener("click",storeBookInLibrary);

