'use strict';

const ROOT_PATH = '../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/getGetKeyToStateTools';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

// const proxyquire = require( 'proxyquire' ).noCallThru();

// const sinon = require( 'sinon' );

const getGetKeyToStateTools = require( FULL_MODULE_PATH ).default


describe( MODULE_PATH, function() {

    it( 'normal operation', function() {

        const mockReduxXCore = {

            keyToStateTools: {

                kTST: 'dan abromov'
            },
        };

        const getKeyToStateTools = getGetKeyToStateTools({

            reduxXCore: mockReduxXCore
        });

        expect( getKeyToStateTools() ).to.deep.equal({

            kTST: 'dan abromov'
        });
    });

    it( 'reduxX not set up yet', function() {

        const mockReduxXCore = {};

        let error = null;

        try {

            getGetKeyToStateTools({

                reduxXCore: mockReduxXCore
            })();

        } catch( err ) {

            error = err;
        }

        expect(
            
            error.message
        ).to.equal( 'ReduxX error: ReduxX has not been set up yet' );
    });
});
