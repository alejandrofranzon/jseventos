/*function creoID() {
    return parseInt(Math.random() * 100000)
}

function agregarDeudas() {
    let id = creoID()
    let descripcion = prompt("agregar entidad a la que adeuda")
    let importe = parseInt(prompt("Importe que adeuda"))
        deudas.push(new Deudas(id, descripcion, importe))
        console.table(deudas)
}
*/
 
const campos = document.querySelectorAll("input")
const cargar = document.querySelector("button.button-outline")

function listaInformacion() {
    campos.forEach(campo => {
        console.log(campo.value)
    })
} 

function focoEnCampos() {
    campos.forEach(campo => {
        campo.addEventListener("focus", ()=> {campo.className = "fondo-amarillo"})
        campo.addEventListener("blur", ()=> {campo.className = ""})
    })
}