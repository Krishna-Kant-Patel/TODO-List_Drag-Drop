var firstName = document.getElementById("firstname").value
var lastName = document.getElementById("lastname").value
var Gender = document.getElementById("male").value
var Submit = document.getElementById("btn")



Submit.addEventListener("click", submits);

function submits(){
    const Card = document.getElementById("card")
    var firstName = document.getElementById("firstname").value
var lastName = document.getElementById("lastname").value
var Gender = document.getElementById("male").value
    // console.log(lastName, firstName, Gender)
    const myDiv = document.createElement("div")
    myDiv.innerHTML = `<p>${firstName}</p>
    <p>${lastName}</p>
    <p>${Gender}</p>`

    Card.appendChild(myDiv)
    

}