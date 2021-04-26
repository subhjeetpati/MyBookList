let counter = 4


function AddBook()
{
    console.log(counter)
    let bookDetails = document.getElementById("form")
    let bookItem = "<td>" + counter+ "." + " </td> "
    for(let i=0;i<bookDetails.length;i++)
    {
        bookItem += "<td> " + bookDetails.elements[i].value + " </td> "
    }

    console.log(counter)
    document.getElementById("bookPlace").innerHTML = bookItem;
    counter++;
    console.log(counter)


}

document.getElementById("addBookBtn").addEventListener("click",AddBook);

