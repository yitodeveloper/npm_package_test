"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = namegen;
var consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
var vocales = ["a", "e", "i", "o", "u"];
var maxVocalesJuntas = 2;
var maxConsonantesJuntas = 1;
var maxUsoConsonantes = 4;
var maxSize = maxUsoConsonantes + maxUsoConsonantes * maxVocalesJuntas;

function namegen() {

    var tipoLetraActual = 0;
    var cantidadConsonantes = 0;
    var contadorVocal = 0;
    var contadorConsonante = 0;
    var nombre = "";

    for (var i = 0; i < maxSize; i++) {
        tipoLetraActual = consonanteVocal();
        if (tipoLetraActual == 1) {
            contadorVocal = 0;
            if (contadorConsonante <= maxConsonantesJuntas) {
                nombre += obtenerConsonante();
                contadorConsonante++;
                cantidadConsonantes++;
            } else {
                nombre += obtenerVocal();
                contadorConsonante = 0;
                contadorVocal++;
            }
        } else {
            contadorConsonante = 0;
            if (contadorVocal <= maxVocalesJuntas - 1) {
                nombre += obtenerVocal();
                contadorVocal++;
            } else {
                nombre += obtenerConsonante();
                contadorVocal = 0;
                contadorConsonante++;
                cantidadConsonantes++;
            }
        }

        if (cantidadConsonantes >= maxUsoConsonantes) {
            break;
        }
    }

    return nombre;
}

function consonanteVocal() {
    return Math.round(Math.random()); // 0 = vocal o 1 = consonante
}

function obtenerConsonante() {
    return consonantes[Math.floor(consonantes.length * Math.random())];
}

function obtenerVocal() {
    return vocales[Math.floor(vocales.length * Math.random())];
}