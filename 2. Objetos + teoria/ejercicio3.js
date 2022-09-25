/* Ejercicio 3 */
/**
 * En este ejercicio agregar al objeto gato del ejericio 1 
 * el método saludar donde el gato informe su nombre y su color.
 * Crear un objeto gato2 con la misma estructura que gato y llame
 * al método saludar de ambos gatos
 */

//asigno dinamicamente la propidad saludar. Como sera un metodo y usa this, para que conoozca la data lo asigno por prototipo'
//como no es de un tipo Gato al ser literal, es Object y uso su prototype para asignar la funcion anonima saludar que ya sabe quien es this

gato["saludar"] = Object.prototype.saludar = function(){ 
    return `Mi nombre es ${this.nombre} y mi color es ${this.color}`;
}
console.log(gato.saludar())
