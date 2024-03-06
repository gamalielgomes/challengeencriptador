const textArea = document.querySelector(".campo__texto")
const mensagem = document.querySelector(".campo__mensagem")

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = ""
}

function encriptar(stringEnciptada) {

    let matrizcodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEnciptada = stringEnciptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++) {
        if(stringEnciptada.includes(matrizcodigo[i][0])) {
            stringEnciptada = stringEnciptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
    }

    return stringEnciptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = ""
}

function desencriptar(stringDesencriptada) {

    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++) {
        if(stringDesencriptada.includes(matrizcodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
        }

    }

    return stringDesencriptada;
}

function btncopiar(){
    navigator.clipboard.writeText(mensagem.value).then(() => {
        alert("copiado para área de trasferência!")
    })
}