
var Contact = require('../models/Contact.js');
var bluebird = require('bluebird');

var ContactCtrl = function ()  {}

ContactCtrl.prototype.save = function (data) {
    return new Promise((resolve, reject) => {
        let newContact = new Contact({
            date: new Date(),
            name: data.name,
            coname: data.coname,
            website: data.website,
            email: data.email,
            goals: data.goals
        })

        newContact.save(err => {
            if (err) reject(err);
            else resolve({status: 200, message: 'saved'});
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