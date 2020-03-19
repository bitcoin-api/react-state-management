import { getFormattedKeys } from '../tools/utils';
import { REDUXX_SPECIAL_KEY } from '../tools/constants';


const recursivelyRetrieveFormattedInitialStateData = Object.freeze(

    ({
        currentKeys,
        currentInitialStateData,
        formattedInitialState

    }) => {

        Object.keys( currentInitialStateData ).forEach( key => {

            const isValueKey = (key === REDUXX_SPECIAL_KEY);

            if( isValueKey ) {

                const value = currentInitialStateData[ key ];

                const formattedInitialStateData = {
    
                    keys: getFormattedKeys({ keys: currentKeys }),
                    value
                };
    
                formattedInitialState.push( formattedInitialStateData );
            }
            else {

                recursivelyRetrieveFormattedInitialStateData({

                    currentKeys: currentKeys.concat( key ),
                    currentInitialStateData: currentInitialStateData[ key ],
                    formattedInitialState
                });
            }
        });
    }
);


export default Object.freeze(

    ({
        initialState,

    }) => {

        const formattedInitialState = [];
            
        Object.keys( initialState ).forEach( levelOneKey => {

            const levelOneInitialStateData = initialState[ levelOneKey ];

            recursivelyRetrieveFormattedInitialStateData({

                currentKeys: [ levelOneKey ],
                currentInitialStateData: levelOneInitialStateData,
                formattedInitialState
            });
        });

        return formattedInitialState;
    }
);
