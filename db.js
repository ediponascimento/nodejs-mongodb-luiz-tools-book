const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const url = "youdatabseurl";

MongoClient.connect(url, { useUnifiedTopology: true }).then(conn => global.conn = conn.db('workshop'))
    .catch(err => {
        throw err;
    });

findAll = callback => {
    global.conn.collection("customers").find({}).toArray(callback);
}

insertCustomer = (customer, callback) => {
    global.conn.collection("customers").insert(customer, callback);
}

findOne = (id, callback) => {
    global.conn.collection("customers").findOne(new ObjectId(id), callback);
}

updateCliente = (id, customer, callback) => {
    global.conn.collection("customers").updateOne({ _id: new Object(id) }, customer, callback);
}

deleteCliente = (id, callback) => {
    global.conn.collection("customers").deleteOne({_id: new Object(id), callback});
}

module.exports = { findAll, insertCustomer, findOne, updateCliente, deleteCliente };