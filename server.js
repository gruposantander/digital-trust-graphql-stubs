'use strict'

const express = require ('express');
const csv = require('csvtojson');
const jsonGraphqlExpress = require ('json-graphql-server');
const usersFile = './data/users.csv';
const addressesFile = './data/addresses.csv';
const contactsFile = './data/contacts.csv';
const contactsFile = './data/accounts.csv';
let countAddresses, countPhones, countEmails, countFinances, countBankAccounts, countIdentifiers = 0 ;
const debug = require('debug')('import');
const data = { 
    users: [], 
    personal_basic_details: [],
    business_basic_details: [],
    id_documents: [],
    addresses: [],
    phone_numbers: [],
    emails: [],
    finances: [],
    bank_accounts: [],
    bank_account_identifiers: []
};


importCsv( usersFile, {})

.then( users => {

    data.users = users.map( user => {
        const {id, username} = user;
        const personal_basic_detail_id = id; 
        return {id, username, personal_basic_detail_id}
    });

    data.personal_basic_details = users.map( user => {
        const {id, given_name, family_name, gender, civil_status, country_of_birth, ial} = user;
        const birthdate = new Date(user.birthdate);
        const user_id = id;
        return {id, user_id, given_name, family_name, gender, birthdate, civil_status, country_of_birth, ial}
    });

    debug(data.users);
}).then( () => {
    const PORT = 4000;
    const app = express();
    
    app.use('/graphql', jsonGraphqlExpress.default(data));
    app.listen(PORT);
})



async function importCsv(dataFile, parser) {

    let jsonObj;

    return csv({
        colParser: parser
    })
    .fromFile(dataFile)
    .then((jsonObj)=>{
        return jsonObj;
    });
}