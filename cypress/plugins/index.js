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
    addMember(member) {
      return new Promise((resolve) => {
        mongoose.connect('mongodb://localhost/re_engage_test', (err) => {
          newMember = new Member(member);
          newMember.save((err) => {
            resolve('done');
          });
        });
      });
    },
    dropDatabase() {
      return new Promise((resolve) => {
        mongoose.connect('mongodb://localhost/re_engage_test', (err) => {
          mongoose.connection.collections.members.drop((err) => {
            resolve('done');
          });
        });
      });
    },
  });
  // `config` is the resolved Cypress config
}