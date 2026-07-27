const nombre = document.getElementById("nombre")
const form = document.getElementById("frm")
form.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(nombre.value)
})

async function getData() {
  const url = "http://127.0.0.1:8000/productos";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}