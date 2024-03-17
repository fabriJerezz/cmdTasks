#!/usr/bin/env node

import readline from 'readline';
import chalk from 'chalk';
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`running on port ${PORT}`);
// });

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const badAnswer = () => {
  reader.write(chalk.blue('por favor, ingrese una opción válida'))
}

reader.question(
  chalk.blue(
    'seleccione una opción: \n \n presione 1 para ingresar \n presione 2 para registrarse \n presione 3 para cambiar su contraseña \n', (answer) => {
      parsedAnswer = parseInt(answer)
      if (answer === isNaN) {
        // Hacer un while para que hasta que no se ponga una opcion valida quede en el mismo lugar
        // Para esta parte de la entrada erronea tengo que borrar la vista del menu, escribir el pedido de que ingrese una entrada valida, y el setTimeout() tiene que ir con el borrado de esa linea, luego volver al inicio en donde se vuelve a escribir la vista del menu
        // Tener en cuenta la posibilidad de que la entrada puede ser otro nro, un string, etc
        // intentar hacer que la interfaz tenga links para interactuar en vez de tener que tengamos que introducir por teclado la opcion que queremos seleccionar

        setTimeout(badAnswer, 2000)
      } else {

      }
    }
  )
)


