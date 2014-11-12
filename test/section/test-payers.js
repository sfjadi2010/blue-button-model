"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var samples = require('../samples/section/payers');

var expect = chai.expect;

describe('payers section tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validate(samples.valid_0, 'payers');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validate(samples.invalid_0, 'payers');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
    });
});
