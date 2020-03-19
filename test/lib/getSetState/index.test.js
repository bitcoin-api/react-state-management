'use strict';

const ROOT_PATH = '../../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/getSetState/index';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

// const proxyquire = require( 'proxyquire' ).noCallThru();

const sinon = require( 'sinon' );

const getSetState = require( FULL_MODULE_PATH ).default;


describe( MODULE_PATH, function() {

    let newDessertSetStateStub;
    let newMonkeySetStateStub;
    let newHippoFavoriteFoodSetStateStub;
    let newHippoSetStateStub;

    it( 'normal operation', function() {

        newDessertSetStateStub = sinon.stub();
        newMonkeySetStateStub = sinon.stub();
        newHippoFavoriteFoodSetStateStub = sinon.stub();
        newHippoSetStateStub = sinon.stub();

        const setState = getSetState({

            reduxXCore: {

                keyToStateTools: {

                    'monkey': {
                        
                        stateSetter: newMonkeySetStateStub
                    },
                    'monkey-favoriteFood-favoriteDessert': {
                        
                        stateSetter: newDessertSetStateStub
                    },
                    'hippo': {
                        
                        stateSetter: newHippoSetStateStub
                    },
                    'hippo-favoriteFood': {
                        
                        stateSetter: newHippoFavoriteFoodSetStateStub
                    },
                }
            },

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
            }
        });

        setState(

            {
                keys: [

                    'monkey',
                    'favoriteFood',
                    'favoriteDessert',
                ],

                value: 'apple'
            },
            {
                keys: 'monkey',
                value: 2,
            },
            {
                keys: [

                    'hippo',
                    'favoriteFood',
                ],

                value: 'megaBanana'
            },
            {
                keys: 'hippo',
            }
        );

        // let newDessertSetStateStub;
        // let newMonkeySetStateStub;
        // let newHippoFavoriteFoodSetStateStub;
        // let newHippoSetStateStub;

        expect( newDessertSetStateStub.args.length ).to.equal( 1 );
        expect( newDessertSetStateStub.args[0].length ).to.equal( 1 );
        expect( newDessertSetStateStub.args[0][0] ).to.equal( 'apple' );

        expect( newMonkeySetStateStub.args.length ).to.equal( 1 );
        expect( newMonkeySetStateStub.args[0].length ).to.equal( 1 );
        expect( newMonkeySetStateStub.args[0][0] ).to.equal( 2 );

        expect( newHippoFavoriteFoodSetStateStub.args.length ).to.equal( 1 );
        expect( newHippoFavoriteFoodSetStateStub.args[0].length ).to.equal( 1 );
        expect( newHippoFavoriteFoodSetStateStub.args[0][0] ).to.equal( 'megaBanana' );

        expect( newHippoSetStateStub.args.length ).to.equal( 1 );
        expect( newHippoSetStateStub.args[0].length ).to.equal( 1 );
        expect( newHippoSetStateStub.args[0][0] ).to.equal( undefined );
    });

    it( 'trying to set state when reduxX not set up yet', function() {

        const setState = getSetState({

            reduxXCore: {},

            stateKeyMapper: {},

            initialState: []
        });

        let error = null;

        try {

            setState(

                {
                    keys: [

                        'monkey',
                        'favoriteFood',
                    ],

                    value: 'apple',
                },
                {
                    keys: [

                        'hippo',
                        'favoriteFood',
                    ],
                    value: undefined,
                }
            );

        } catch( err ) {

            error = err
        }

        expect( error.message ).to.equal(

            'error in ReduxX setState: reduxX not set up, use "setUpReduxX"'
        );
    });

    it( 'trying to set state with state keys that do not exist', function() {

        newDessertSetStateStub = sinon.stub();
        newMonkeySetStateStub = sinon.stub();
        newHippoFavoriteFoodSetStateStub = sinon.stub();
        newHippoSetStateStub = sinon.stub();

        const setState = getSetState({

            reduxXCore: {

                keyToStateTools: {

                    'monkey': {
                        
                        stateSetter: newMonkeySetStateStub
                    },
                    'monkey-favoriteFood-favoriteDessert': {
                        
                        stateSetter: newDessertSetStateStub
                    },
                    'hippo': {
                        
                        stateSetter: newHippoSetStateStub
                    },
                    'hippo-favoriteFood': {
                        
                        stateSetter: newHippoFavoriteFoodSetStateStub
                    },
                }
            },

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
            }
        });

        let error = null;

        try {

            setState(

                {
                    keys: [
                        'monkey',
                        'favoriteFoodz',
                    ],
                    value: 'apple',
                }
            );

        } catch( err ) {

            error = err
        }

        expect( error.message ).to.equal(

            'invalid ReduxX key specified'
        );
    });
});
