import { getFormattedKeys } from '../tools/utils';


export default Object.freeze(

    ({
        initialState,

    }) => {

        const formattedInitialState = [];

        initialState.forEach( ({ keys, value }) => {

            const formattedInitialStateData = {

                keys: getFormattedKeys({ keys }),

                value,
            };

            formattedInitialState.push( formattedInitialStateData );
        });

        return formattedInitialState;
    }
);
