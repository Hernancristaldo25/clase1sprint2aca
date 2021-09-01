let miPromesa = new Promise ((resolve, reject ) => {
    const number = Math.floor(Math.random() * 4);
    if (number > 0){
        resolve((number % 2) ? 'es impar' : 'es par');
    }else{
        reject('rechazado, es cero!')
    }});


miPromesa
    .then(number => console.log(number))
    .catch(error => console.log(error));
