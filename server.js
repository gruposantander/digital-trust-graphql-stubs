'use strict'

const express = require ('express');
const jsonGraphqlExpress = require ('json-graphql-server');
const testFolder = './people/';
const fs = require('fs');

// proxy for adding id properly to new Objects
var proxyHandlerObj = {
  set:function(target,property,value,receiver) {
    let idx = receiver.length + 1;
    let isUsername = value.hasOwnProperty("username");
    return property !== "length"
       ? isUsername
          ? (target[property] = {...value, id : idx, personal_basic_detail_id : idx, business_basic_detail_id: idx})
          : (target[property] = {...value, id : idx})
       : true;
  }
};

const ddbb = {
    users: new Proxy([],proxyHandlerObj),
    personal_basic_details: new Proxy([],proxyHandlerObj),
    business_basic_details: new Proxy([],proxyHandlerObj),
    id_documents: new Proxy([],proxyHandlerObj),
    addresses: new Proxy([],proxyHandlerObj),
    phone_numbers: new Proxy([],proxyHandlerObj),
    emails: new Proxy([],proxyHandlerObj),
    finances: new Proxy([],proxyHandlerObj),
    bank_accounts: new Proxy([],proxyHandlerObj),
    bank_account_identifiers: new Proxy([],proxyHandlerObj)
};

function addPeople (filename) {
  let {
    username,
    company_type,
    company_start_date,
    company_end_date,
    company_trade_name,
    company_registered_name,
    company_country_incorporation,
    id_documents,
    addresses,
    phone_numbers,
    emails,
    finances,
    bank_accounts,
    bank_account_identifiers,
    ...basic_data} = require(filename);
  let user_id = ddbb.users.push({ username : username});
  ddbb.personal_basic_details.push({...basic_data,user_id: user_id});
  ddbb.business_basic_details.push({
    company_type,
    company_start_date,
    company_end_date,
    company_trade_name,
    company_registered_name,
    company_country_incorporation,
    user_id: user_id
  })
  id_documents.map(doc => {
    ddbb.id_documents.push({...doc, user_id: user_id})
  });
  addresses.map(doc => {
    ddbb.addresses.push({...doc, user_id: user_id})
  })
  phone_numbers.map(doc => {
    ddbb.phone_numbers.push({...doc, user_id: user_id})
  });
  emails.map(doc => {
    ddbb.emails.push({...doc, user_id: user_id})
  })
  finances.map(doc => {
    ddbb.finances.push({...doc, user_id: user_id})
  })
  bank_accounts.map(doc => {
    ddbb.bank_accounts.push({...doc, user_id: user_id})
  })
  bank_account_identifiers.map(doc => {
    ddbb.bank_account_identifiers.push({...doc, user_id: user_id})
  })

  //console.log(`[${user_id}] added`);
}


fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    addPeople(`${testFolder}${file}`);

  });
  const PORT = 4000;
  const app = express();

  app.use('/graphql', jsonGraphqlExpress.default({
    users: [...ddbb.users.values()],
    personal_basic_details: [...ddbb.personal_basic_details.values()],
    business_basic_details: [...ddbb.business_basic_details.values()],
    id_documents: [...ddbb.id_documents.values()],
    addresses: [...ddbb.addresses.values()],
    phone_numbers: [...ddbb.phone_numbers.values()],
    emails: [...ddbb.emails.values()],
    finances: [...ddbb.finances.values()],
    bank_accounts: [...ddbb.bank_accounts.values()],
    bank_account_identifiers: [...ddbb.bank_account_identifiers.values()]
  }));
  app.listen(PORT);
});
