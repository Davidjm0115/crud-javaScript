function agregarCliente(){
    var lista = document.getElementById('lista');
    clientes.forEach(function(data,index) {
        var linew= document.createElement('li');
        var contenido= document.createTextNode(data.nombre+"  "+data.correo+"  "+data.direccion+"  "+data.ciudad);
        lista.appendChild(linew);
        lista.appendChild(contenido);
    })   
    }
    
function agregarVentas(){
    var lista = document.getElementById('listaventas');
    ventas.forEach(function(data,index) {
        var linew= document.createElement('li');
        var contenido= document.createTextNode("Cliente: "+ data.cliente+" Producto: "+data.producto+" Fecha: "+data.fecha+" Valor unitario "+data.valorUnitario+" Cantidad: "+data.cantidad+" Subtotal: "+(data.valorUnitario*data.cantidad));
        lista.appendChild(linew);
        lista.appendChild(contenido);
     })   
    }
       
const clientes=[
 {
    id: 1, 
    'nombre': 'David', 
    'correo': 'dajuma15@hotmail.es', 
    'direccion': 'dsfdsdf', 
    'ciudad': 'Cartagena'
},

{
    id: 2, 
    'nombre': 'Alejandro', 
    'correo': 'dajuma15@hotmail.es', 
    'direccion': 'dsfdsdf', 
    'ciudad': 'Cartagena'
},
{
    id: 3, 
    'nombre': 'Alexia', 
    'correo': 'dajuma15@hotmail.es', 
    'direccion': 'dsfdsdf', 
    'ciudad': 'Cartagena'
}]

const ventas=[
    {
       id: 1, 
       'cliente': 'David', 
       'producto': 'chevrolet 1',
       'fecha': '3/08/2012', 
       'valorUnitario': '5000000', 
       'cantidad': '3'
   },
   
   {
       id: 2, 
       'cliente': 'Alejandro', 
       'producto': 'chevrolet 2',
       'fecha': '2/10/2022', 
       'valorunitario': '5000000', 
       'cantidad': '1'
   },
   {
       id: 3, 
       'cliente': 'Alexia', 
       'producto': 'chevrolet 3',
       'fecha': '10/05/2021', 
       'valorunitario': '5000000', 
       'cantidad': '2'
   }]
   
// Clientes 
function mostrarId(){

    var ide = document.getElementById('id').value;
    var nombre = document.getElementById('nombre');
    var c = document.getElementById('correo');
    var d = document.getElementById('direccion');
    var ci = document.getElementById('ciudad');
    
    for(let item in clientes){

        if(ide==clientes[item].id){
          nombre.value = clientes[item].nombre;  
          c.value = clientes[item].correo; 
          d.value = clientes[item].direccion; 
          ci.value = clientes[item].ciudad; 
   
        }
        else{
            alert('usuario no encontrado')
        }

    }

}

function eliminarId(){

    var ide = document.getElementById('id').value;

    for(let item in clientes){

        if(ide == clientes[item].id){
          delete  clientes[item].id; 
          delete  clientes[item].nombre;  
          delete  clientes[item].correo; 
          delete  clientes[item].direccion; 
          delete  clientes[item].ciudad; 
          alert('El cliente '+ ide +' Fue eliminado')
          
          
        }
        else{
            alert('usuario no encontrado')
        }

    }

}

function editarId(){

    var ide = document.getElementById('id').value;
    if(ide == ''){
        alert('no hay nada que buscar');
    }

    else{

        var nombre = document.getElementById('nombre').value;
        var c = document.getElementById('correo').value;
        var d = document.getElementById('direccion').value;
        var ci = document.getElementById('ciudad').value;
        elementIndex= clientes.findIndex(obj => obj.id == ide);
        clientes[elementIndex].nombre = nombre;
        clientes[elementIndex].correo = c;
        clientes[elementIndex].direccion = d;
        clientes[elementIndex].ciudad = ci;
        alert('registro ha sido actualizado')
    }

}

function crear(){
    var ide = document.getElementById('id').value;
    var nombre = document.getElementById('nombre').value;
    var c = document.getElementById('correo').value;
    var d = document.getElementById('direccion').value;
    var ci = document.getElementById('ciudad').value;
    clientes.push({id: ide,nombre: nombre, correo: c, doreccion: d, ciudad: ci});
      alert('creado')
      
  }


//Ventas


function eliminarIdVentas(){

    var ide = document.getElementById('id').value;

    for(let item in clientes){

        if(ide == clientes[item].id){
          delete  clientes[item].id; 
          delete  clientes[item].cliente;  
          delete  clientes[item].producto; 
          delete  clientes[item].fecha; 
          delete  clientes[item].valorUnitario; 
          delete  clientes[item].cantidad; 
          alert('La venta'+ ide +' Fue eliminada')
          
          
        }
        else{
            alert('venta no encontrada')
        }

    }

}

function crearVentas(){
    var ide = document.getElementById('id').value;
    var fechaa = document.getElementById('fecha').value;
    var c = document.getElementById('cliente').value;
    var v = document.getElementById('valor').value;
    var ca = document.getElementById('cantidad').value;
    ventas.push({id: ide,fecha: fechaa, cliente: c, valorUnitario: v, cantidad: ca});
      alert('creado')
      
  }