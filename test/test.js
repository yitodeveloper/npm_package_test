const expect = require("chai").expect
const namegen = require("..").default

describe("#namegen",function(){
    it("Uso máximo de cuatro consonantes", function(){
        const name = namegen()
        const consonantes = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","y","z"]
        var contadorConsonantes = 0
        var cumple = false
        for(var i = 0;i< consonantes.length;i++){
            if(name.indexOf(consonantes[i]) > 0){
                contadorConsonantes++;
            }

        }

        if(contadorConsonantes<= 4){
            cumple = true
        }

        expect(cumple).to.equal(true)
    })
})