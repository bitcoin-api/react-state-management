'use strict';

const ROOT_PATH = '../../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/getGetState/index';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

// const proxyquire = require( 'proxyquire' ).noCallThru();

// const sinon = require( 'sinon' );

const getGetState = require( FULL_MODULE_PATH ).default;


describe( MODULE_PATH, function() {

    it( 'normal operation', function() {

        const getState = getGetState({

            reduxXCore: {

                keyToStateTools: {

                    'monkey': {
                        
                        stateValue: true
                    },
                    'monkey-favoriteFood': {
                        
                        stateValue: 'banana'
                    },
                    'monkey-favoriteFood-favoriteDessert': {
                        
                        stateValue: 'banana split'
                    },
                    'monkey-favoriteFood-favoriteDessert-favoriteDessertTime': {
                        
                        stateValue: 'anytime'
                    },
                    'monkey-height': {
                        
                        stateValue: null
                    },
                    'hippo-favoriteFood': {
                        
                        stateValue: 'watermelon'
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

        const value1 = getState({

            keys: [

                'monkey',
                'favoriteFood',
                'favoriteDessert'
            ]
        });

        expect( value1 ).to.equal( 'banana split' );

        const value2 = getState({

            keys: [

                'monkey',
                'favoriteFood',
            ]
        });

        expect( value2 ).to.equal( 'banana' );

        const value3 = getState({

            keys: 'monkey',
        });

        expect( value3 ).to.equal( true );
    });

    it( 'trying to get non-existant state value', function() {

        const getState = getGetState({

            reduxXCore: {

                keyToStateTools: {

                    'monkey': {
                        
                        stateValue: true
                    },
                    'monkey-favoriteFood': {
                        
                        stateValue: 'banana'
                    },
                    'monkey-favoriteFood-favoriteDessert': {
                        
                        stateValue: 'banana split'
                    },
                    'monkey-favoriteFood-favoriteDessert-favoriteDessertTime': {
                        
                        stateValue: 'anytime'
                    },
                    'monkey-height': {
                        
                        stateValue: null
                    },
                    'hippo-favoriteFood': {
                        
                        stateValue: 'watermelon'
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

            getState({

                keys: [

                    'monkeyz',
                    'favoriteFood',
                    'favoriteDessert'
                ]
            });

        } catch( err ) {

            error = err
        }

        expect( error.message ).to.equal(

            'invalid ReduxX key specified'
        );

        let error2 = null;

        try {

            getState({

                keys: [

                    'monkey',
                    'favoriteFoodz',
                    'favoriteDessert'
                ]
            });

        } catch( err ) {

            error2 = err
        }

        expect( error2.message ).to.equal(

            'invalid ReduxX key specified'
        );

        let error3 = null;

        try {

            getState({

                keys: [

                    'monkey',
                    'favoriteFood',
                    'favoriteDessertz'
                ]
            });

        } catch( err ) {

            error3 = err
        }

        expect( error3.message ).to.equal(

            'invalid ReduxX key specified'
        );
    });

    it( 'reduxX not set up yet', function() {

        const getState = getGetState({

            reduxXCore: {},

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

            getState({

                keys: [

                    'monkey',
                    'favoriteFood',
                    'favoriteDessert'
                ]
            });

        } catch( err ) {

            error = err
        }

        expect( error.message ).to.equal(

            'error in ReduxX getState: reduxX not set up, use "setUpReduxX"'
        );
    });
});
