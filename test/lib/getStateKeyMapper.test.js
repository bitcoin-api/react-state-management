'use strict';

const ROOT_PATH = '../../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'lib/getStateKeyMapper';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;


describe( MODULE_PATH, function() {

    it( 'normal operation', function() {


        const getStateKeyMapper = require( FULL_MODULE_PATH ).default;

        const stateKeyMapper = getStateKeyMapper({

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
                    value: '69cm',
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

        expect( stateKeyMapper ).deep.equal({

            monkey: {

                '@reduxXKey': 'REDUXX:GUID:1',

                favoriteFood: {

                    '@reduxXKey': 'REDUXX:GUID:2',

                    favoriteDessert: {

                        '@reduxXKey': 'REDUXX:GUID:3',

                        favoriteDessertTime: {

                            '@reduxXKey': 'REDUXX:GUID:4',
                        }
                    }
                },

                height: {

                    '@reduxXKey': 'REDUXX:GUID:5'
                },
            },

            hippo: {

                '@reduxXKey': 'REDUXX:GUID:6',

                favoriteFood: {

                    '@reduxXKey': 'REDUXX:GUID:7'
                },
            }
        });
    });
});
