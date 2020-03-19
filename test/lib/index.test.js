'use strict';

const ROOT_PATH = '../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/index';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

const proxyquire = require( 'proxyquire' ).noCallThru();


describe( MODULE_PATH, function() {

    function getModule() {

        const mocks = {

            getSetUpReduxX: {

                gSUR: 'yes'
            },
            getConfiguredInitialState: {

                mCIS: 'yes'
            },
            getStateKeyMapper: {

                mSKM: 'yes'
            },
            getGetGlobalUseState: {

                mGGUS: 'yes'
            },
            getGetKeyToStateTools: {

                gGKTST: 'yes'
            },
            reduxXSpecialVFunction: {

                rXSVF: 'yes'
            }, //require( './reduxXSpecialVFunction' ),
            getSetState: {

                gSS: 'yes'
            }, //require( './getSetState' ),
            getGetState: {

                gGS: 'yes'
            },
            getResetReduxX: {

                gRR: 'yes'
            },
        };

        const proxyquireStubs = {

            './getSetUpReduxX': mocks.getSetUpReduxX,
            './getConfiguredInitialState': mocks.getConfiguredInitialState,
            './getStateKeyMapper': mocks.getStateKeyMapper,
            './getGetGlobalUseState': mocks.getGetGlobalUseState,
            './getGetKeyToStateTools': mocks.getGetKeyToStateTools,
            './reduxXSpecialVFunction': mocks.reduxXSpecialVFunction,
            './getSetState': mocks.getSetState,
            './getGetState': mocks.getGetState,
            './getResetReduxX': mocks.getResetReduxX,
        };

        return proxyquire( FULL_MODULE_PATH, proxyquireStubs );
    }

    it( 'normal operation', function() {

        const lib = getModule();

        expect( lib ).deep.equal({

            getSetUpReduxX: {

                gSUR: 'yes'
            },
            getConfiguredInitialState: {

                mCIS: 'yes'
            },
            getStateKeyMapper: {

                mSKM: 'yes'
            },
            getGetGlobalUseState: {

                mGGUS: 'yes'
            },
            getGetKeyToStateTools: {

                gGKTST: 'yes'
            },
            reduxXSpecialVFunction: {

                rXSVF: 'yes'
            },
            getSetState: {

                gSS: 'yes'
            },
            getGetState: {

                gGS: 'yes'
            },
            getResetReduxX: {

                gRR: 'yes'
            },
            REDUXX_SPECIAL_KEY: '@reduxXKey',
        });
    });
});
