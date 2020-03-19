import { getStateKeyMapperObject } from '../tools/utils';
import { REDUXX_SPECIAL_KEY } from '../tools/constants';


export default Object.freeze(

    ({
        globalUseState,
        initialState,
        stateKeyMapper

    }) => {

        const keyToStateTools = {};

        initialState.forEach( ({ keys, value }) => {

            const stateKeyMapperObject = getStateKeyMapperObject({

                stateKeyMapper,
                keys,
            });

            const stateKey = stateKeyMapperObject[ REDUXX_SPECIAL_KEY ];

            const [

                stateValue,
                stateSetter

            ] = globalUseState( value );

            keyToStateTools[ stateKey ] = { stateValue, stateSetter };
        });

        return { keyToStateTools };
    }
);
