const formulario = document.getElementById("frm")
const input = document.getElementById("categoria-id")


async function obtenerCategorias(){
  const url = "http://localhost:8000/categoria"
  try{
    const respuesta = await fetch(url)
    if (!respuesta.ok){
      throw new Error(`Response status: ${respuesta.status}`);
    }
    const resultado = await respuesta.json()
    console.log(resultado)
  }catch(Error){
    console.error(error.message);
  }
}
async function obtenerCategoriaID(categoria_id){
  const url = `http://localhost:8000/categorias/${categoria_id}`
  try{
    const respuesta = await fetch(url)
    if (!respuesta.ok){
      throw new Error(`Response status: ${respuesta.status}`);
    }
    const resultado = await respuesta.json()
    console.log(resultado)
  }catch(Error){
    console.error(error.message);
  }
}
formulario.addEventListener("submit", (event)=>{
  event.preventDefault()
  let ob = [obtenerCategoriaID(input.value)]
  let tex = document.getElementById("tex")
  let caj = document.getElementById("caj")
  caj.appendChild(tex)
  for (producto in ob){
    console.log()
  }
})
obtenerCategorias()