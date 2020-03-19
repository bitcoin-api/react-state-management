import getFormattedArguments from './getFormattedArguments';
import { getFormattedKeys, getStateKeyMapperObject } from '../tools/utils';
import { REDUXX_SPECIAL_KEY } from '../tools/constants';


export default Object.freeze(

    ({
        reduxXCore,
        stateKeyMapper

    }) => Object.freeze( ( ...getStateArguments ) => {

        if(  !reduxXCore.keyToStateTools ) {

            throw new Error(

                'error in ReduxX getState: ' +
                'reduxX not set up, use "setUpReduxX"'
            );
        }

        const formattedArguments = getFormattedArguments(
            
            ...getStateArguments
        );

        const { keys } = formattedArguments;

        const formattedKeys = getFormattedKeys({ keys });

        const stateKeyMapperObject = getStateKeyMapperObject({

            stateKeyMapper,
            keys: formattedKeys,
        });

        const stateKey = stateKeyMapperObject[ REDUXX_SPECIAL_KEY ];

        const { stateValue } = reduxXCore.keyToStateTools[ stateKey ];

        return stateValue;
    })
);
