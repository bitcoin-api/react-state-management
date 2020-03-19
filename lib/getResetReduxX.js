import { getStateKeyMapperObject } from './tools/utils';
import { REDUXX_SPECIAL_KEY } from './tools/constants';


const isValidListOfKeys = Object.freeze( listOfKeys => {

    if( !Array.isArray( listOfKeys ) || (listOfKeys.length === 0) ) {

        return false;
    }
        
    for( const keys of listOfKeys ) {

        if( !Array.isArray( keys ) || (keys.length === 0) ) {

            return false;
        }
    }

    return true;
});


const getIfGetsKeysAreEqual = Object.freeze( ({
    
    keysA,
    keysB

 }) => {

    if( keysA.length !== keysB.length ) {

        return false;
    }

    for( let i = 0; i < keysA.length; i++ ) {

        if( keysA[i] !== keysB[i] ) {

            return false;
        }
    }

    return true;
});


const getIfKeysAreIncludedInListOfKeys = Object.freeze( ({
    
    keys,
    listOfKeys,

 }) => {

    for( const keysToInclude of listOfKeys ) {

        if( getIfGetsKeysAreEqual({ keysA: keysToInclude, keysB: keys }) ) {

            return true;
        }
    }

    return false;
});


export default Object.freeze(

    ({

        reduxXCore,
        initialState,
        stateKeyMapper

    }) => Object.freeze( ({

        listOfKeysToInclude = null,
        listOfKeysToExclude = null,

    } = {

        listOfKeysToInclude: null,
        listOfKeysToExclude: null,

    }) => {

        if(  !reduxXCore.keyToStateTools ) {

            throw new Error(

                'error in resetReduxX: reduxX not set up, use "setUpReduxX"'
            );
        };

        if(
            (
                !!listOfKeysToInclude &&
                !isValidListOfKeys( listOfKeysToInclude )
            ) ||
            (
                !!listOfKeysToExclude &&
                !isValidListOfKeys( listOfKeysToExclude )
            ) ||
            (!!listOfKeysToInclude && !!listOfKeysToExclude)
        ) {

            throw new Error(

                'ReduxX error: invalid resetReduxX setup'
            );
        }

        const keysAndValuesToConsider = [];

        if( !!listOfKeysToInclude ) {
            
            for( const keysAndValue of initialState ) {

                if(
                    getIfKeysAreIncludedInListOfKeys({

                        keys: keysAndValue.keys,
                        listOfKeys: listOfKeysToInclude,
                    })
                ) {

                    keysAndValuesToConsider.push( keysAndValue );
                }
            }
        }
        else if( !!listOfKeysToExclude ) {

            for( const keysAndValue of initialState ) {

                if(
                    !getIfKeysAreIncludedInListOfKeys({

                        keys: keysAndValue.keys,
                        listOfKeys: listOfKeysToExclude
                    })
                ) {

                    keysAndValuesToConsider.push( keysAndValue );
                }
            }
        }
        else {

            keysAndValuesToConsider.push( ...initialState );
        }

        keysAndValuesToConsider.forEach( ({ keys, value }) => {

            const stateKeyMapperObject = getStateKeyMapperObject({

                stateKeyMapper,
                keys,
            });

            const stateKey = stateKeyMapperObject[ REDUXX_SPECIAL_KEY ];

            const { stateSetter } = reduxXCore.keyToStateTools[ stateKey ];

            stateSetter( value );
        });
    })
);
