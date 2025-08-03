let arrayAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if(amigo !== '') {
        arrayAmigos.push(amigo);
        mostrarAmigos();
        limpiarInput();
    }else {
        alert('Por favor, inserte un nombre');
    }
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML =  ' ';
    for(let i = 0; i < arrayAmigos.length; i++){
        let li = document.createElement('li');
        li.innerHTML = arrayAmigos[i];
        lista.appendChild(li);
    }
    
}

function sortearAmigo(){
    if(arrayAmigos.length > 0) {
        let indiceAmigo = Math.floor(Math.random()* arrayAmigos.length);
        let amigoSorteado = arrayAmigos[indiceAmigo];
        reiniciarLista();
        mostrarResultado(amigoSorteado);
    } else {
        alert("No hay amigos para sortear");
    }
}

function mostrarResultado(amigoSorteado) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'El amigo secreto es: ' + amigoSorteado;
    console.log('El amigo secreto es: ' + amigoSorteado);

}

function reiniciarLista() {
    arrayAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}

function limpiarInput(){
    document.getElementById('amigo').value = '';
}

