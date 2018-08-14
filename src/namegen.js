const consonantes = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","y","z"]
const vocales = ["a","e","i","o","u"]
const maxVocalesJuntas = 2
const maxConsonantesJuntas = 1
const maxUsoConsonantes = 4
const maxSize = maxUsoConsonantes + maxUsoConsonantes*maxVocalesJuntas

export default function namegen(){
    
    let tipoLetraActual = 0 
    let cantidadConsonantes = 0
    let contadorVocal = 0
    let contadorConsonante = 0
    let nombre = ""

    for(let i = 0; i<maxSize;i++){
        tipoLetraActual = consonanteVocal()
        if(tipoLetraActual == 1){
            contadorVocal = 0
            if(contadorConsonante<= maxConsonantesJuntas){
                nombre += obtenerConsonante()
                contadorConsonante ++
                cantidadConsonantes++
            }else{
                nombre += obtenerVocal()
                contadorConsonante = 0
                contadorVocal++
            }
        }else{
            contadorConsonante = 0
            if(contadorVocal <= maxVocalesJuntas-1){
                nombre += obtenerVocal()
                contadorVocal++
            }else{
                nombre += obtenerConsonante()
                contadorVocal = 0
                contadorConsonante ++
                cantidadConsonantes++
            }
        }

        if(cantidadConsonantes >= maxUsoConsonantes){
            break
        }
    }
    
    return nombre
    
}

function consonanteVocal(){
    return Math.round(Math.random()) // 0 = vocal o 1 = consonante
}

function obtenerConsonante(){
    return consonantes[Math.floor(consonantes.length*Math.random())]
}

function obtenerVocal(){
    return vocales[Math.floor(vocales.length*Math.random())]
}