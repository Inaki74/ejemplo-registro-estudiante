'use strict';

var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');

// Use the external Chai As Promised to deal with resolving promises in
// expectations
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

let estudiante;

Given(/^un estudiante con nombre "([^"]*)"$/, function (nombre, callback) {
    // encontrar box de nombre de estudiante y ponerle el texto
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
});

Given(/^apellido "([^"]*)"$/, function (apellido, callback) {
    
});

Given(/^numero de estudiante (\d+)$/, function (nro, callback) {
    
});

When(/^el estudiante intenta registrarse$/, function (callback) {
    //element(by.css('.button.hero-cta')).click();
    //callback();
});

Then(/^se agrega el estudiante al sistema$/, function (callback) {
    //setTimeout(callback, timeToWait);
});

Then(/^el sistema avisa que el estudiante fue agregado."$/, function (callback) {
    //expect(browser.getTitle()).to.eventually.equal(text).and.notify(callback);
});