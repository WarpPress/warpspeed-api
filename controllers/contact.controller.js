
var Contact = require('../models/Contact.js');
var bluebird = require('bluebird');

var ContactCtrl = function ()  {}

ContactCtrl.prototype.save = function (contact) {
    return new Promise((resolve, reject) => {
        let newContact = new Contact({
            date: new Date(),
            name: contact.name,
            coname: contact.coname,
            website: contact.website,
            email: contact.email
        })

        newContact.save(err => {
            if (err) reject(err);
            else resolve('saved');
        })
    })
}

ContactCtrl.prototype.findAll = function() {
    return new Promise((resolve, reject) => {
        // get all the users
        Contact.find({}, function(err, contacts) {
            if (err) reject(err);
            else resolve(contacts);
        });
    })
}

module.exports = ContactCtrl;