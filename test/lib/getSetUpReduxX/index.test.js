'use strict';

const ROOT_PATH = '../../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/getSetUpReduxX/index';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

const proxyquire = require( 'proxyquire' ).noCallThru();

const sinon = require( 'sinon' );

// const setupReduxXFresh = require( FULL_MODULE_PATH );


describe( MODULE_PATH, function() {

    let setInitialStateStub;

    it( 'normal operation', function() {

        setInitialStateStub = sinon.stub().returns({

            keyToStateTools: {

                fakeKeyToStateTools: 'yea'
            }
        });

        const proxyquireStubs = {

            './setInitialState': setInitialStateStub
        };

        const getSetUpReduxX = proxyquire(

            FULL_MODULE_PATH,
            proxyquireStubs
        ).default;

        const reduxXCore = {

            xCore: 'ya'
        };

        const setUpReduxX = getSetUpReduxX({

            reduxXCore,
            initialState: {

                'is': 'theInitialState'
            },
            stateKeyMapper: {

                skm: true
            }
        });

        setUpReduxX({

            isFakeUseState: true
        });

        expect( setInitialStateStub.args.length ).to.equal( 1 );
        expect( setInitialStateStub.args[0].length ).to.equal( 1 );
        expect( setInitialStateStub.args[0][0] ).to.eql({

            globalUseState: {

                isFakeUseState: true
            },
            initialState: {

                'is': 'theInitialState'
            },
            stateKeyMapper: {

                skm: true
            }
        });

        expect( reduxXCore ).to.eql({

            xCore: 'ya',
            globalUseState: {

                isFakeUseState: true
            },
            keyToStateTools: {

                fakeKeyToStateTools: 'yea'
            }
        });
    });

    it( 'error: missing useState', function() {
        
        const proxyquireStubs = {

            './setInitialState': {}
        };

        const getSetUpReduxX = proxyquire(
            
            FULL_MODULE_PATH,
            proxyquireStubs

        ).default;

        const reduxXCore = {

            xCore: 'ya'
        };

        const setUpReduxX = getSetUpReduxX({

            reduxXCore,
            initialState: {

                'is': 'theInitialState'
            },
            stateKeyMapper: {

                skm: true
            }
        });

        let erroredAsExpected = false;

        try {
            
            setUpReduxX();
        }
        catch( err ) {

            if(
                err.message === (

                    'ReduxX error: "useState" input parameter missing in ' +
                    'setUpReduxX invocation'
                )
            ) {

                erroredAsExpected = true;
            }
        }

        expect( erroredAsExpected ).to.equal( true );
    });
});
