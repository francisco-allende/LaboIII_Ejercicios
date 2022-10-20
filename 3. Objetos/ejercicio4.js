/* Ejercicio 4 */
/**
 * En este ejercicio desarrollar una función constructora que nos
 * permita crear todos los objetos gatos que necesitemos
 *
 * Crear dos gatos y hacerlos saludar
 */

function constuirGatos(nombre, raza, color)
{
    return {
        nombre: nombre,
        raza: raza,
        color: color, 
        saludar: function(){
            return `Mi nombre es ${this.nombre} y mi color es ${this.color}`;
        }
    }
}

let cat = constuirGatos("Tokio", "Lindo", "Naranja");
console.log(cat.saludar());