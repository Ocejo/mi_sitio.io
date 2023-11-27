let btn_producto_uno = document.querySelector("#btn-producto1")
let btn_producto_dos = document.querySelector("#btn-producto2")
let btn_producto_tres = document.querySelector("#btn-producto3")
let seccion_productos = document.querySelector("#productos_comprar")
let total_compra = document.querySelector("#totalCompra")
let total = 0
let producto_uno = false;
let producto_dos = false;
let producto_tres = false;
let btn_pagar = document.querySelector("#btn-pagar")
let title_uno = document.querySelector("#inicio")
let input_nombre = document.querySelector("#nombre")
let input_mensaje = document.querySelector("#mensaje")
let input_correo = document.querySelector("#correo")

input_nombre.addEventListener("keyup",function(){
    input_mensaje.textContent = "Hola mi nombre es "+input_nombre.value+" y me gustaría que me contacten al correo: "
})

input_correo.addEventListener("keyup",function(){
    input_mensaje.textContent = "Hola mi nombre es "+input_nombre.value+" y me gustaría que me contacten al correo: " + input_correo.value
})

title_uno.addEventListener("mouseover", function(){
    title_uno.style.color = "red"
    title_uno.style.fontSize = "38px"
})

title_uno.addEventListener("mouseout", function(){
    title_uno.style.color = "black"
    title_uno.style.fontSize = "20px"
})

btn_producto_uno.addEventListener("click",function(){
    if(producto_uno == false){
        let nuevo_producto_uno = document.createElement("p")
        nuevo_producto_uno.innerHTML = "Producto Uno <strong>$800</strong> <br> Descripción del Producto 1. "
        nuevo_producto_uno.id = "producto_uno_comprar"
        seccion_productos.appendChild(nuevo_producto_uno)
        let btn_eliminar = document.createElement("button")
        btn_eliminar.classList.add("btn")
        btn_eliminar.classList.add("btn-danger")
        btn_eliminar.id = "btn-producto1-eliminar"
        btn_eliminar.textContent = "Eliminar"
        btn_eliminar.setAttribute('onclick', 'eliminarProductoUno()');
        nuevo_producto_uno.appendChild(btn_eliminar)
        total += 800
        total_compra.textContent = "$" + total
        producto_uno = true
        btnPagar()
    }
})

btn_producto_dos.addEventListener("click",function(){
    if(producto_dos == false){
        let nuevo_producto_dos = document.createElement("p")
        nuevo_producto_dos.innerHTML = "Producto Dos <strong>$1,900</strong> <br> Descripción del Producto 2. "
        nuevo_producto_dos.id = "producto_dos_comprar"
        seccion_productos.appendChild(nuevo_producto_dos)
        total += 1900
        total_compra.textContent = "$" + total
        producto_dos = true
        let btn_eliminar = document.createElement("button")
        btn_eliminar.classList.add("btn")
        btn_eliminar.classList.add("btn-danger")
        btn_eliminar.id = "btn-producto2-eliminar"
        btn_eliminar.textContent = "Eliminar"
        btn_eliminar.setAttribute('onclick', 'eliminarProductoDos()');
        nuevo_producto_dos.appendChild(btn_eliminar)

        btnPagar()
    }
})

btn_producto_tres.addEventListener("click",function(){
    if(producto_tres==false){
        let nuevo_producto_tres = document.createElement("p")
        nuevo_producto_tres.innerHTML = "Producto Tres <strong>$2,900</strong> <br> Descripción del Producto 3. "
        nuevo_producto_tres.id = "producto_tres_comprar"
        seccion_productos.appendChild(nuevo_producto_tres)
        total += 2900
        total_compra.textContent = "$" + total
        producto_tres = true
        let btn_eliminar = document.createElement("button")
        btn_eliminar.classList.add("btn")
        btn_eliminar.classList.add("btn-danger")
        btn_eliminar.id = "btn-producto3-eliminar"
        btn_eliminar.textContent = "Eliminar"
        btn_eliminar.setAttribute('onclick', 'eliminarProductoTres()');
        nuevo_producto_tres.appendChild(btn_eliminar)
        btnPagar()
    }
})

btn_pagar.addEventListener("click", function(){
    confirm("¿Deseas confirmar la compra por $"+total+"?")
})

function eliminarProductoUno(){
    let elemento_eliminar_uno = document.querySelector("#producto_uno_comprar")
    seccion_productos.removeChild(elemento_eliminar_uno)
    total -=800
    total_compra.textContent = total
    producto_uno = false
    btnPagar()
}
function eliminarProductoDos(){
    let elemento_eliminar_dos = document.querySelector("#producto_dos_comprar")
    seccion_productos.removeChild(elemento_eliminar_dos)
    total -=1900
    total_compra.textContent = total
    producto_dos = false
    btnPagar()
}
function eliminarProductoTres(){
    let elemento_eliminar_tres = document.querySelector("#producto_tres_comprar")
    seccion_productos.removeChild(elemento_eliminar_tres)
    total -=2900
    total_compra.textContent = total
    producto_tres = false
    btnPagar()
}
function btnPagar(){
    if(total>0){
        btn_pagar.style.display = "block"
    }else{
        btn_pagar.style.display = "none"
    }
}