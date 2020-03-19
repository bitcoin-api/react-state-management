'use strict';

const ROOT_PATH = '../../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/tools/constants';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

// const proxyquire = require( 'proxyquire' ).noCallThru();
// const sinon = require( 'sinon' );
const constants = require( FULL_MODULE_PATH );


describe( MODULE_PATH, function() {

    it( 'normal operation', function() {

        expect( constants.REDUXX_SPECIAL_KEY ).to.equal( '@reduxXKey' );
    });
});
