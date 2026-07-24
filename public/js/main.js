const nombre = document.getElementById("nombre")
const form = document.getElementById("frm")
form.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(nombre.value)
})