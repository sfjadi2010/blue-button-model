"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/cda_physical_quantity');

var expect = chai.expect;

describe('cda_physical_quantity unit tests', function () {
    it('sample cda_physical_quantity_0', function () {
        bbm.validator.validateSectionObj(samples.valid_0, 'cda_physical_quantity');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample invalid_0', function () {
        bbm.validator.validateSectionObj(samples.invalid_0, 'cda_physical_quantity');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        expect(result.errors).to.have.length(2);
        var c2p = util.codeToPath(result.errors);
        expect(c2p.OBJECT_REQUIRED).to.have.length(2);
        expect(c2p.OBJECT_REQUIRED).to.deep.equal(["#/cda_physical_quantity", "#/cda_physical_quantity"]);
    });

    it('sample invalid_1', function () {
        bbm.validator.validateSectionObj(samples.invalid_1, 'cda_physical_quantity');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        expect(result.errors).to.have.length(1);
        var c2p = util.codeToPath(result.errors);
        expect(c2p.OBJECT_REQUIRED).to.have.length(1);
        expect(c2p.OBJECT_REQUIRED[0]).to.equal("#/cda_physical_quantity");
    });

    it('sample invalid_2', function () {
        bbm.validator.validateSectionObj(samples.invalid_2, 'cda_physical_quantity');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        expect(result.errors).to.have.length(1);
        var c2p = util.codeToPath(result.errors);
        expect(c2p.OBJECT_REQUIRED).to.have.length(1);
        expect(c2p.OBJECT_REQUIRED[0]).to.equal("#/cda_physical_quantity");
    });

    it('sample invalid_3', function () {
        bbm.validator.validateSectionObj(samples.invalid_3, 'cda_physical_quantity');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        expect(result.errors).to.have.length(1);
        var c2p = util.codeToPath(result.errors);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.have.length(1);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).to.equal("#/cda_physical_quantity");
    });
});