'use strict';

require('dotenv').config()

const readline = require('readline')
const conn = require('./lib/connectMongo')
const Usuario = require('./models/user')
const ValueTemp = require('./models/valueTemp')

conn.once('open', async () => {
  try {

    const respuesta = await askUser('Are you sure you want to initialize the database? (no)')

    if (respuesta.toLowerCase() !== 'si') {
      console.log('Proceso abortado.')
      return process.exit(0);
    }

    await initUsuarios()
    await initValueTemp()
    conn.close()

  } catch (err) {
    console.log('Hubo un error:', err)
    process.exit(1)
  }

})


async function initUsuarios() {
  // borrar documentos existentes de la colección
  console.log('Vaciando colección de usuarios...')
  await Usuario.deleteMany()

  // cargar los documentos iniciales
  console.log('Cargando usuarios...')
  const result = await Usuario.insertMany([
    { email: 'test@test.com', password: '1234' }
  ])
  console.log(`Se han creado ${result.length} usuarios.`)
}

async function initValueTemp() {
  // borrar documentos existentes de la colección
  console.log('Vaciando colección de usuarios...')
  await Usuario.deleteMany()

  // cargar los documentos iniciales
  console.log('Cargando usuarios...')
  const result = await Usuario.insertMany([
    { email: 'test@test.com', password: '1234' }
  ])
  console.log(`Se han creado ${result.length} usuarios.`)
}




function askUser(textoPregunta) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(textoPregunta, answer => {
      rl.close()
      resolve(answer)
    })
  })
}