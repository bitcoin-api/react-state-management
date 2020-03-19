'use strict';

const ROOT_PATH = '../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/getResetReduxX';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

const sinon = require( 'sinon' );

const getResetState = require( FULL_MODULE_PATH ).default;


describe( MODULE_PATH, function() {

    let s0;
    let s1;
    let s2;
    let s3;
    let s4;
    let s5;

    it( 'normal operation', function() {

        s0 = sinon.stub();
        s1 = sinon.stub();
        s2 = sinon.stub();
        s3 = sinon.stub();
        s4 = sinon.stub();
        s5 = sinon.stub();

        const resetState = getResetState({

            reduxXCore: {

                keyToStateTools: {

                    'monkey': {
                        
                        stateSetter: s0,
                    },
                   'monkey-favoriteFood': {

                        stateSetter: s1,
                    },
                    'monkey-favoriteFood-favoriteDessert': {
                        
                        stateSetter: s2,
                    },
                    'monkey-favoriteFood-favoriteDessert-favoriteDessertTime': {
                        
                        stateSetter: s3,
                    },
                    'monkey-height': {
                        
                        stateSetter: s4,
                    },
                    'hippo-favoriteFood': {
                        
                        stateSetter: s5,
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
        });

        resetState();

        expect( s0.args.length ).to.equal( 1 );
        expect( s0.args[0].length ).to.equal( 1 );
        expect( s0.args[0][0] ).to.deep.equal( true );
        expect( s1.args.length ).to.equal( 1 );
        expect( s1.args[0].length ).to.equal( 1 );
        expect( s1.args[0][0] ).to.deep.equal( 'banana' );
        expect( s2.args.length ).to.equal( 1 );
        expect( s2.args[0].length ).to.equal( 1 );
        expect( s2.args[0][0] ).to.deep.equal( 'banana split' );
        expect( s3.args.length ).to.equal( 1 );
        expect( s3.args[0].length ).to.equal( 1 );
        expect( s3.args[0][0] ).to.deep.equal( 'anytime' );
        expect( s4.args.length ).to.equal( 1 );
        expect( s4.args[0].length ).to.equal( 1 );
        expect( s4.args[0][0] ).to.deep.equal( undefined );
        expect( s5.args.length ).to.equal( 1 );
        expect( s5.args[0].length ).to.equal( 1 );
        expect( s5.args[0][0] ).to.deep.equal( 'watermelon' );
    });

    it( 'with listOfKeysToInclude', function() {

        s0 = sinon.stub();
        s1 = sinon.stub();
        s2 = sinon.stub();
        s3 = sinon.stub();
        s4 = sinon.stub();
        s5 = sinon.stub();

        const resetState = getResetState({

            reduxXCore: {

                keyToStateTools: {

                    'monkey': {
                        
                        stateSetter: s0,
                    },
                   'monkey-favoriteFood': {

                        stateSetter: s1,
                    },
                    'monkey-favoriteFood-favoriteDessert': {
                        
                        stateSetter: s2,
                    },
                    'monkey-favoriteFood-favoriteDessert-favoriteDessertTime': {
                        
                        stateSetter: s3,
                    },
                    'monkey-height': {
                        
                        stateSetter: s4,
                    },
                    'hippo-favoriteFood': {
                        
                        stateSetter: s5,
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
        });

        resetState({

            listOfKeysToInclude: [
                [ 'monkey', 'favoriteFood' ],
                [ 'monkey', 'height' ],
                [ 'monkey', 'favoriteFood', 'favoriteDessert', 'favoriteDessertTime' ],
            ]
        });

        expect( s0.args.length ).to.equal( 0 );
        // expect( s0.args[0].length ).to.equal( 1 );
        // expect( s0.args[0][0] ).to.deep.equal( true );
        expect( s1.args.length ).to.equal( 1 );
        expect( s1.args[0].length ).to.equal( 1 );
        expect( s1.args[0][0] ).to.deep.equal( 'banana' );
        expect( s2.args.length ).to.equal( 0 );
        // expect( s2.args[0].length ).to.equal( 1 );
        // expect( s2.args[0][0] ).to.deep.equal( 'banana split' );
        expect( s3.args.length ).to.equal( 1 );
        expect( s3.args[0].length ).to.equal( 1 );
        expect( s3.args[0][0] ).to.deep.equal( 'anytime' );
        expect( s4.args.length ).to.equal( 1 );
        expect( s4.args[0].length ).to.equal( 1 );
        expect( s4.args[0][0] ).to.deep.equal( undefined );
        expect( s5.args.length ).to.equal( 0 );
        // expect( s5.args[0].length ).to.equal( 1 );
        // expect( s5.args[0][0] ).to.deep.equal( 'watermelon' );
    });

    it( 'with listOfKeysToExclude', function() {

        s0 = sinon.stub();
        s1 = sinon.stub();
        s2 = sinon.stub();
        s3 = sinon.stub();
        s4 = sinon.stub();
        s5 = sinon.stub();

        const resetState = getResetState({

            reduxXCore: {

                keyToStateTools: {

                    'monkey': {
                        
                        stateSetter: s0,
                    },
                   'monkey-favoriteFood': {

                        stateSetter: s1,
                    },
                    'monkey-favoriteFood-favoriteDessert': {
                        
                        stateSetter: s2,
                    },
                    'monkey-favoriteFood-favoriteDessert-favoriteDessertTime': {
                        
                        stateSetter: s3,
                    },
                    'monkey-height': {
                        
                        stateSetter: s4,
                    },
                    'hippo-favoriteFood': {
                        
                        stateSetter: s5,
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
        });

        resetState({

            listOfKeysToExclude: [
                [ 'monkey', 'favoriteFood' ],
                [ 'monkey', 'height' ],
                [ 'monkey', 'favoriteFood', 'favoriteDessert', 'favoriteDessertTime' ],
            ]
        });

        expect( s0.args.length ).to.equal( 1 );
        expect( s0.args[0].length ).to.equal( 1 );
        expect( s0.args[0][0] ).to.deep.equal( true );
        expect( s1.args.length ).to.equal( 0 );
        // expect( s1.args[0].length ).to.equal( 1 );
        // expect( s1.args[0][0] ).to.deep.equal( 'banana' );
        expect( s2.args.length ).to.equal( 1 );
        expect( s2.args[0].length ).to.equal( 1 );
        expect( s2.args[0][0] ).to.deep.equal( 'banana split' );
        expect( s3.args.length ).to.equal( 0 );
        // expect( s3.args[0].length ).to.equal( 1 );
        // expect( s3.args[0][0] ).to.deep.equal( 'anytime' );
        expect( s4.args.length ).to.equal( 0 );
        // expect( s4.args[0].length ).to.equal( 1 );
        // expect( s4.args[0][0] ).to.deep.equal( undefined );
        expect( s5.args.length ).to.equal( 1 );
        expect( s5.args[0].length ).to.equal( 1 );
        expect( s5.args[0][0] ).to.deep.equal( 'watermelon' );
    });

    it( 'e1. reduxX not set up', function() {

        s0 = sinon.stub();
        s1 = sinon.stub();
        s2 = sinon.stub();
        s3 = sinon.stub();
        s4 = sinon.stub();
        s5 = sinon.stub();

        const resetState = getResetState({

            reduxXCore: {
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
        });

        let erroredAsExpected = false;

        try {

            resetState();
        }
        catch( err ) {

            if(
                err.message === (
                    'error in resetReduxX: reduxX not set up, use "setUpReduxX"'
                )
            ) {

                erroredAsExpected = true;
            }
        }

        expect( erroredAsExpected ).to.equal( true );

        expect( s0.args.length ).to.equal( 0 );
        expect( s1.args.length ).to.equal( 0 );
        expect( s2.args.length ).to.equal( 0 );
        expect( s3.args.length ).to.equal( 0 );
        expect( s4.args.length ).to.equal( 0 );
        expect( s5.args.length ).to.equal( 0 );
    });

    [
        {
            testName: 'e2. invalid listOfKeysToExclude',
            testData: {
                listOfKeysToExclude: {}
            }
        },
        {
            testName: 'e3. invalid listOfKeysToInclude',
            testData: {
                listOfKeysToInclude: 'xxx'
            }
        },
        {
            testName: 'e4. listOfKeysToInclude and listOfKeysToExclude',
            testData: {
                listOfKeysToInclude: [ 'b' ],
                listOfKeysToExclude: [ 'a' ]
            }
        },
        {
            testName: 'e5. listOfKeysToInclude is zero length',
            testData: {
                listOfKeysToInclude: [],
            }
        },
        {
            testName: 'e6. listOfKeysToInclude has invalid key',
            testData: {
                listOfKeysToInclude: [ [ 'a', 'b'], [] ],
            }
        },

    ].forEach( ({

        testName,
        testData

    }) => {

        it( testName, function() {

            s0 = sinon.stub();
            s1 = sinon.stub();
            s2 = sinon.stub();
            s3 = sinon.stub();
            s4 = sinon.stub();
            s5 = sinon.stub();
    
            const resetState = getResetState({
    
                reduxXCore: {
    
                    keyToStateTools: {
    
                        'monkey': {
                            
                            stateSetter: s0,
                        },
                       'monkey-favoriteFood': {
    
                            stateSetter: s1,
                        },
                        'monkey-favoriteFood-favoriteDessert': {
                            
                            stateSetter: s2,
                        },
                        'monkey-favoriteFood-favoriteDessert-favoriteDessertTime': {
                            
                            stateSetter: s3,
                        },
                        'monkey-height': {
                            
                            stateSetter: s4,
                        },
                        'hippo-favoriteFood': {
                            
                            stateSetter: s5,
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
            });

            const resetOptions = Object.assign(
             
                {},
                testData
            );
    
            let erroredAsExpected = false;

            try {

                resetState( resetOptions );
            }
            catch( err ) {

                if(
                    err.message === (
                        'ReduxX error: invalid resetReduxX setup'
                    )
                ) {

                    erroredAsExpected = true;
                }
            }

            expect( erroredAsExpected ).to.equal( true );

            expect( s0.args.length ).to.equal( 0 );
            expect( s1.args.length ).to.equal( 0 );
            expect( s2.args.length ).to.equal( 0 );
            expect( s3.args.length ).to.equal( 0 );
            expect( s4.args.length ).to.equal( 0 );
            expect( s5.args.length ).to.equal( 0 );
        });
    });
});
