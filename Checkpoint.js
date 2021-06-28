class Comidas {
    constructor(id, name, tempo){
        this.id = id;
        this.name = name;
        this.tempo = tempo;
    }
};

let comidas = [
    new Comidas(1, "Pipoca", 10),
    new Comidas(2, "Macarrão", 8),
    new Comidas(3, "Carne", 15),
    new Comidas(4, "Feijão", 12),
    new Comidas(5, "Brigadeiro", 8),
    new Comidas(6, "Lasagna", 15) //testando nova comida
];

class Microondas {
    constructor(comidas){
        this.comidas = comidas;
    }

    montaMenu () {
        for (let comida of this.comidas) {
            console.log(`${comida.id} - ${comida.name} - ${comida.tempo} segundos`)
        }
    }

    comecarPreparo (opcao, tempo) {
        let comidaEncontrada = this.comidas.find(comida => comida.id === opcao)
        if (!comidaEncontrada) {
            console.log("Prato inexistente")
            return
        }
        if (tempo < comidaEncontrada.tempo) {
            console.log("Tempo insuficiente")
            return
        }
        if (tempo >= comidaEncontrada.tempo*3) {
            console.log("Kabumm!")
            return
        }
        if (tempo >= comidaEncontrada.tempo*2) {
            console.log("Seu comida queimou!")
            return
        }
        if (typeof tempo != "number") {
            console.log("Digite um número")
        }
        console.log("Prato pronto, bom apetite!")
    }
}

let microondas = new Microondas(comidas)
microondas.montaMenu()

microondas.comecarPreparo(2, 15)
microondas.comecarPreparo(78,15)