//analiza las keys del objeto para construir las columnas
function crearCabecera(row) {
    //puedo hacerlo asi o con dos const, es indistinto
    const cabecera = document.createElement("thead"),
        tr = document.createElement("tr");



    //me agarro el elemento row y recorro sus keys, gracias al for in que recorre las keys de un objeto
    //le puse como contenido textual de esa th el contendio de la key (quedan columnas nombre, genero, etc) 
    //th es para cabeceras
    for (const key in row) {
        //oculto el id
        if (key !== 'id') {
            const th = document.createElement("th");
            th.textContent = key;
            tr.append(th);
        }
    }

    cabecera.appendChild(tr);
    return cabecera;
}

function crearCuerpo(data) {
    const cuerpo = document.createElement("tbody");

    data.forEach(element => {
        const fila = document.createElement("tr");

        for (const key in element) {
            if (key !== 'id') {
                const celda = document.createElement("td");
                celda.textContent = element[key]; //asi accedo al valor de la key
                fila.append(celda);
            }
        }
        //va dentro del for each porque hago una fila por cada persona, sino solo haria una
        cuerpo.appendChild(fila);
    });

    const filas = cuerpo.children;
    for (let i = 0; i < filas.length; i++) {
        //a las filas impares le agrego la clase girs asi queda rayadito
        if (!(i % 2)) {
            filas[i].classList.add('gris')
        }
    }

    return cuerpo;
}

export function crearTabla(data) {
    if (!Array.isArray(data)) {
        //los datos no son validos, no es un array. Me escapo. Es el todoOk de C
        return null;
    }

    const tabla = document.createElement("table");
    tabla.classList.add('mouse');

    //le paso la key para la columna
    tabla.appendChild(crearCabecera(data[0]));
    //le paso toda la data al cuerpo
    tabla.appendChild(crearCuerpo(data));

    return tabla;
}