import getFormattedArguments from './getFormattedArguments';
import { getFormattedKeys, getStateKeyMapperObject } from '../tools/utils';
import { REDUXX_SPECIAL_KEY } from '../tools/constants';


export default Object.freeze(

    ({
        reduxXCore,
        stateKeyMapper

    }) => Object.freeze( ( ...setStateArguments ) => {

        if(  !reduxXCore.keyToStateTools ) {

            throw new Error(

                'error in ReduxX setState: ' +
                'reduxX not set up, use "setUpReduxX"'
            );
        }

        const formattedArguments = getFormattedArguments(
            
            ...setStateArguments
        );

        formattedArguments.forEach( setStateData => {

            const { keys, value } = setStateData;

            const formattedKeys = getFormattedKeys({ keys });

            const stateKeyMapperObject = getStateKeyMapperObject({

                stateKeyMapper,
                keys: formattedKeys,
            });

            const stateKey = stateKeyMapperObject[ REDUXX_SPECIAL_KEY ];

            const { stateSetter } = reduxXCore.keyToStateTools[ stateKey ];

            stateSetter( value );
        });
    })
);
