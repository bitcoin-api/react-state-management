'use strict';

const ROOT_PATH = '../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/reduxXSpecialVFunction';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

const theModule = require( FULL_MODULE_PATH ).default;


describe( MODULE_PATH, function() {

    it( 'normal operation', function() {

        const testValue = { abc: 'xxx' };

        const specialVEnhancedValue = theModule( testValue );

        expect( specialVEnhancedValue ).to.deep.equal({

            '@reduxXKey': { abc: 'xxx' }
        });
    });
});
