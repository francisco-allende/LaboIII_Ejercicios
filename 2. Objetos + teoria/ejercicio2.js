/* Ejercicio 2 */
/**
 * Crear un objeto literal para guardar la info de una banda musical
 * Las propiedades requeridas son:
 * nombre: Una cadena que representa el nombre de la banda.
 * nationalidad: Una cadena que representa el país de donde proviene la banda.
 * genero: tipo de música que toca la banda.
 * miembros: Un número que representa el número de miembros que tiene la banda.
 * inicio: Un número que representa el año en que se formó la banda.
 * separacion: Un número que representa el año en que se separó la banda,
 * o false si todavía están juntos.
 * albums: Un array que representa los álbumes lanzados por la banda.
 *  Cada elemento del array debe ser un objeto que contenga los siguientes
 *  miembros:
 * nombre: Una cadena que representa el nombre del álbum.
 * lanzamiento: Un número que representa el año en que se lanzó el álbum.
 *
 * Incluir al menos dos álbumes en el array albums
 *
 * Tambien debe tener un método info, , que contendrá una pequeña biografía
 * detallando su nombre, nacionalidad, años activos, estilo, y el título y la fecha
 * de lanzamiento de su primer álbum.
 */

let banda = 
{
    nombre:         "Redonditos",
    nacionalidad:   "Argentina",
    genero:         "Rock",
    miembros:        3,
    inicio:         1976,
    separacion:     2001,
                    //Creo objetos unicamente con la notacion de corchetes
        albums:     [
                        {nombre: "Gulp!", lanzamiento: 1985},
                        {nombre: "X!", lanzamiento: 1990}
                    ],
    info: function(){
    console.log(`La banda ${this.nombre} es de ${this.nacionalidad}, su genero es ${this.genero}, poseia ${this.miembros} miembros
                arranco en ${this.inicio}, se separo en ${this.separacion} y dos albumes notables son:
                ${this.albums[0].nombre} - ${this.albums[0].lanzamiento} y ${this.albums[1].nombre} - ${this.albums[1].lanzamiento}`);
    }
}
banda.info();

