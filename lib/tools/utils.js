import { INVALID_REDUXX_KEY_SPECIFIED } from './constants';


const getGetGuid = Object.freeze(

    () => {

        let theUltimateReduxXCounter = 1;

        return Object.freeze(
            
            () => {
                
                const theUltimateReduxXGuid = (
                    'REDUXX' +
                    ':GUID' +
                    `:${ theUltimateReduxXCounter }`
                );

                theUltimateReduxXCounter++;
                
                return theUltimateReduxXGuid;
            }
        );
    }
);


export const getGuid = getGetGuid();

export const getFormattedKeys = Object.freeze(

    ({ keys }) => {

        const isSingleKey = (typeof keys === 'string');

        if(
            !keys ||
            !(
                Array.isArray( keys ) ||
                isSingleKey
            ) ||
            (keys.length < 1)
        ) {

            throw new Error( 'incorrect ReduxX keys' );
        }

        if( isSingleKey ) {

            return [ keys ];
        }

        return keys.slice();
    }
);

export const getStateKeyMapperObject = Object.freeze(

    ({

        stateKeyMapper,
        keys,

    }) => {

        let currentStateKeyMapperObject = stateKeyMapper[ keys[0] ];

        if( !currentStateKeyMapperObject ) {

            throw new Error(

                INVALID_REDUXX_KEY_SPECIFIED
            );
        }

        for( let i = 1; i < keys.length; i++ ) {

            const key = keys[i];

            currentStateKeyMapperObject = currentStateKeyMapperObject[ key ];

            if( !currentStateKeyMapperObject ) {

                throw new Error(

                    INVALID_REDUXX_KEY_SPECIFIED
                );
            }
        }

        return currentStateKeyMapperObject;
    }
);