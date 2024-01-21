class Disco {

    // Constructor con todos os atributos
    constructor(nome, grupo, ano, tipoDeMusica, prestado) {
        this.nome = nome;
        this.grupo = grupo;
        this.ano = ano;
        this.tipoDeMusica = tipoDeMusica;
        this.ePrestado = prestado;
    }

    // Método para imprimir por pantalla os datos do disco
    imprimirDatos() {
        console.log("nome: " + this.nome);
        console.log("Grupo: " + this.grupo);
        console.log("ano: " + this.ano);
        console.log("Tipo de Música: " + this.tipoDeMusica);
        console.log("Prestado: " + (this.ePrestado ? "Sí" : "No") + "\n");
    }

        // Método con todos os atributos
        modificarDatosDisco(nome, grupo, ano, tipoDeMusica, prestado) {
            this.nome = nome || this.nome;
            this.grupo = grupo || this.grupo;
            this.ano = ano || this.ano;
            this.tipoDeMusica = tipoDeMusica || this.tipoDeMusica;
            this.ePrestado = prestado || this.ePrestado;
        }
}

// Casos de uso para probas
//primeiroDisco.imprimirDatos();
console.log("\n************ Casos de uso para probas **********\n")
const primeiroDisco = new Disco();
primeiroDisco.imprimirDatos(); //
const segundoDisco = new Disco("En mi hambre mando yo", "Marea", 2011, "Rock", true);
segundoDisco.imprimirDatos(); //
segundoDisco.modificarDatosDisco("DiscoPrueba", "ArtistaPrueba", 2024, "Sin género", false);
segundoDisco.imprimirDatos();

console.log("\n************ Execución do programa **********\n")

// Array para almacenar toda a discografía
const discografia = [];

// Función para engadir discos á discografía
function engadirDisco(nome, grupo, ano, tipo, prestado){
        const novoDisco = new Disco(nome, grupo, ano, tipo, prestado);
        discografia.push(novoDisco)
    }

function mostrarDiscografia(discografia) {
    discografia.forEach(disco => disco.imprimirDatos());
}
    

engadirDisco("Master of Puppets", "Metallica", 1986, "Rock", false);
engadirDisco("The number of the beast", "Iron Maiden", 1982, "Rock", false);
engadirDisco("Museo de rejas Limadas", "Sinkope", 2015, "Rock", true);
mostrarDiscografia(discografia);