'use strict';

const ROOT_PATH = '../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/getGetGlobalUseState';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

// const proxyquire = require( 'proxyquire' ).noCallThru();

// const sinon = require( 'sinon' );

const getGetGlobalUseState = require( FULL_MODULE_PATH ).default;


describe( MODULE_PATH, function() {

    it( 'normal operation', function() {

        const mockReduxXCore = {

            globalUseState: {

                fakeGlobalUseState: 'dan abromov'
            }
        };

        const getGlobalUseState = getGetGlobalUseState({

            reduxXCore: mockReduxXCore
        });

        expect( getGlobalUseState() ).to.deep.equal({

            fakeGlobalUseState: 'dan abromov'
        });
    });

    it( 'reduxX not set up yet', function() {

        const mockReduxXCore = {};

        let error = null;

        try {

            getGetGlobalUseState({

                reduxXCore: mockReduxXCore
            })();

        } catch( err ) {

            error = err;
        }

        expect( error.message ).to.equal( 'ReduxX error: ReduxX has not been set up yet' );
    });
});
