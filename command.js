#!/usr/bin/env node
const program = require('commander')
const { prompt } = require('inquirer')
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer

} = require('./index')


const pertanyaan = [

    {
        type: 'input',
        name: 'firstName',
        message: 'Nama Pertama'
    },
     
    {
        type: 'input',
        name: 'lastName',
        message: 'Nama Terakhir'
    },

    {
        type: 'input',
        name: 'phone',
        message: 'No Telepon'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email'
    }

]

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Tambah Pelanggan')
//     .action((firstName, lastName, phone, email) => {
//         addCustomer({
//             firstName,
//             lastName,
//             phone,
//             email
//         });
//     })

    program
        .command('add')
        .alias('a')
        .description('Tambahkan Pelanggan')
        .action(() => {
            prompt(pertanyaan)
                .then(jawaban => addCustomer(jawaban))
        })

//Update Customer

        program
        .command('update <_id>')
        .alias('u')
        .description('Update Pelanggan')
        .action((_id) => {
            prompt(pertanyaan)
                .then(jawaban => updateCustomer(_id,jawaban))
        })

//Remove Customer
        program
        .command('remove <_id>')
        .alias('r')
        .description('Hapus Pelanggan')
        .action(_id => removeCustomer(_id) )

//List Customer
        program
        .command('list')
        .alias('l')
        .description('Daftar Pelanggan')
        .action(() => listCustomer())


    program
    .command('find <name>')
    .alias('f')
    .description('Cari Pelanggan')
    .action(name => findCustomer(name));


program 
    .version('1.0.0')
    .description('Client Management System')

program.parse(process.argv)
