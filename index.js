 const mongoose = require('mongoose');

mongoose.Promise = global.Promise

 const db = mongoose.connect('mongodb://localhost:27017/customercli', {
    useUnifiedTopology: true,
    useNewUrlParser: true
 })

//Import Model
 const Customer = require('./models/customer');



 //Add Customer
//  const addCustomer = (customer,) => {
//     Customer.create(customer).then(customer => {
//       console.info('New Customer Added');
//       db.close();
//     });
//   }

  const addCustomer = async (customer) => {
   try {
       Customer.create(customer)
        .then(customer => {
         console.info('Customer baru ditambah');
         mongoose.connection.close()
       });

   } catch ( err ) {
       console.info(err)
   }
  }


//Find Customer
const findCustomer = (name) => {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstName: search}, {lastName: search}]})
      .then(customer => {
        console.info(customer);
        console.info(`${customer.length} sama`);
        mongoose.connection.close()
      });
  }

//Update Customer
const updateCustomer = async (_id, customer) => {
  try {
      Customer.updateOne({_id}, customer)
      .then(customer => {
        console.info('Customer di Update');
        mongoose.connection.close()
      });

  } catch ( err ) {
      console.info(err)
  }
 }



//Remove Customer
const removeCustomer = (_id) => {
  Customer.remove({_id})
  .then(customer => {
    console.info('Customer Dihapus')
    mongoose.connection.close()
  })
  .catch(err => {
    console.info(err)
  }) 
}

//List Customer 
const listCustomer = () => {
  Customer.find()
    .then(customers => {
      console.info(customers)
      console.info(`${customers.length} customers`)
      mongoose.connection.close()
    })
    .catch(err => {
      console.info(err)
    }) 
}


//export all module
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
}