const cafe = document.getElementById("cafe");
const productos = "js/json/productos.json";

fetch(productos)
    .then(respuesta => respuesta.json())
    .then(datos =>{
        datos.forEach(productos=>{
            let div = document.createElement("div");
            div.innerHTML=`<div class="productos">
                            <h3>${productos.nombre}</h3><br>
                            <img src="./${productos.picture}" class="rounded-circle "width="140px" height="140px"><br>
                            <h5>Precio: $${productos.Precio}</h5>
                            <button>Comprar</button>
                            </div>`;
            cafe.appendChild(div);
        })
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso Finalizado"));
