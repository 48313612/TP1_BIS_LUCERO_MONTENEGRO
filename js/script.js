function validarForm()
{
    let notaMatematica = document.getElementById('notaMatematica').value;
    let notaLengua = document.getElementById('notaLengua').value;
    let notaEFSI = document.getElementById('notaEFSI').value;
    
    //VALIDAR 
    let notaMatematicaValida = validacion(notaMatematica);
    let notaLenguaValida = validacion(notaLengua);
    let notaEFSIValida = validacion(notaEFSI);

    let mensaje = " ";
    if(!notaMatematicaValida || !notaEFSIValida || !notaLenguaValida )
    {
        mensaje = "Error. Debe ser un número entre 1 y 10."
    }
}

function validacion(datoAvalidar)
{
    const tieneLetra = /(?:[A-Z])/.test(datoAvalidar) || /(?:[a-z])/.test(datoAvalidar);
    const tieneNum = /(?:\d)/.test(datoAvalidar);
    let esValido = false;

    if(datoAvalidar <= 10 && datoAvalidar >= 1 && tieneNum && !tieneLetra)
    {
        esValido = true;
    }

    return esValido;
}