'use strict';

const ROOT_PATH = '../../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/getSetUpReduxX/setInitialState';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

const sinon = require( 'sinon' );

// const proxyquire = require( 'proxyquire' ).noCallThru();


const setInitialState = require( FULL_MODULE_PATH ).default;


describe( MODULE_PATH, function() {

    let globalUseStateStub;

    it( 'normal operation: no existing state', function() {

        globalUseStateStub = sinon.stub().returns([
            'fakeStateValue',
            'fakeStateSetter'
        ]);

        const setInitialStateParams = {

            globalUseState: globalUseStateStub,

            stateKeyMapper: {

                monkey: {

                    '@reduxXKey': 'monkey',

                    favoriteFood: {

                        '@reduxXKey': 'monkey-favoriteFood',

                        favoriteDessert: {

                            '@reduxXKey': 'monkey-favoriteFood-favoriteDessert',

                            favoriteDessertTime: {

                                '@reduxXKey': 'monkey-favoriteFood-favoriteDessert-favoriteDessertTime',
                            }
                        }
                    },

                    height: {

                        '@reduxXKey': 'monkey-height'
                    },
                },

                hippo: {

                    '@reduxXKey': 'hippo',

                    favoriteFood: {

                        '@reduxXKey': 'hippo-favoriteFood'
                    },
                }
            },

            initialState: [

                {
                    keys: [

                        'monkey',
                        'favoriteFood',
                        'favoriteDessert',
                        'favoriteDessertTime'
                    ],

                    value: 'anytime',
                },
                {
                    keys: [

                        'monkey',
                        'favoriteFood',
                        'favoriteDessert',
                    ],
                    value: 'banana split',
                },
                {
                    keys: [

                        'monkey',
                        'favoriteFood',
                    ],
                    value: 'banana',
                },
                {
                    keys: [

                        'monkey'
                    ],
                    value: true,
                },
                {
                    keys: [

                        'monkey',
                        'height',
                    ],
                    // value: '69cm',
                },
                {
                    keys: [

                        'hippo',
                        'favoriteFood',
                    ],
                    value: 'watermelon',
                }
            ]
        };

        const { keyToStateTools } = setInitialState(

            setInitialStateParams
        );

        expect( globalUseStateStub.args.length ).to.equal( 6 );
        expect( globalUseStateStub.args[0].length ).to.equal( 1 );
        expect( globalUseStateStub.args[0][0] ).to.equal( 'anytime' );
        expect( globalUseStateStub.args[1].length ).to.equal( 1 );
        expect( globalUseStateStub.args[1][0] ).to.equal( 'banana split' );
        expect( globalUseStateStub.args[2].length ).to.equal( 1 );
        expect( globalUseStateStub.args[2][0] ).to.equal( 'banana' );
        expect( globalUseStateStub.args[3].length ).to.equal( 1 );
        expect( globalUseStateStub.args[3][0] ).to.equal( true );
        expect( globalUseStateStub.args[4].length ).to.equal( 1 );
        expect( globalUseStateStub.args[4][0] ).to.equal( undefined );
        expect( globalUseStateStub.args[5].length ).to.equal( 1 );
        expect( globalUseStateStub.args[5][0] ).to.equal( 'watermelon' );

        expect( keyToStateTools ).to.deep.equal({
            "monkey-favoriteFood-favoriteDessert-favoriteDessertTime": {
                "stateValue": "fakeStateValue",
                "stateSetter": "fakeStateSetter"
            },
            "monkey-favoriteFood-favoriteDessert": {
                "stateValue": "fakeStateValue",
                "stateSetter": "fakeStateSetter"
            },
            "monkey-favoriteFood": {
                "stateValue": "fakeStateValue",
                "stateSetter": "fakeStateSetter"
            },
            "monkey": {
                "stateValue": "fakeStateValue",
                "stateSetter": "fakeStateSetter"
            },
            "monkey-height": {
                "stateValue": "fakeStateValue",
                "stateSetter": "fakeStateSetter"
            },
            "hippo-favoriteFood": {
                "stateValue": "fakeStateValue",
                "stateSetter": "fakeStateSetter"
            }
        });
    });
});
