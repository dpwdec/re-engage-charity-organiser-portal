/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const mongoose = require('mongoose');
const Admin = require('../../models/admin');
const Member = require('../../models/member');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on) => {
  // `on` is used to hook into various events Cypress emits
  on('task', {
    addMember() {
      return new Promise((resolve) => {
        mongoose.connect('mongodb://localhost/re_engage', function(err) {
          var driver1 = new Member({
            name: "Bradley",
            address: "SE153XX",
            role: "driver",
          });
          var driver2 = new Member({ name: "Zeus", address: "SW64QP", role: "driver" });
          var driver3 = new Member({ name: "Kevin", address: "SW74SS", role: "driver" })

          var guest1 = new Member({ name: "Doris", address: "SE58HU", role: "guest" });
          var guest2 = new Member({ name: "Tanil", address: "SW114NJ", role: "guest" });
          var guest3 = new Member({ name: "Dec", address: "SE229EX", role: "guest" });

          driver1.save(function(err) {
            driver2.save(function(err) {
              guest1.save(function(err) {
                guest2.save(function(err) {
                  driver3.save(function(err) {
                    guest3.save(function(err) {
                      resolve('done');
                    });
                  });
                });
              });
            });
          });
        });
      });
    },
    dropDatabase() {
      return new Promise(function(resolve) {
        mongoose.connect('mongodb://localhost/re_engage', function(err) {
          mongoose.connection.collections.members.drop(function () {
            resolve('done');
          });
        });
      });
    },
  });
  // `config` is the resolved Cypress config
}