import getFormat from './getFormat';
import
    getFormattedInitialStateFromArrayForm
        from 
            './getFormattedInitialStateFromArrayForm';
import
    getFormattedInitialStateFromObjectForm
            from 
                './getFormattedInitialStateFromObjectForm';
import { INITIAL_STATE_FORMAT } from '../tools/constants';
const { ARRAY, OBJECT } = INITIAL_STATE_FORMAT;


export default Object.freeze(

    ({
        initialState,

    }) => {

        const format = getFormat({ initialState });

        switch( format ) {
            
            case ARRAY:
            
                initialState = getFormattedInitialStateFromArrayForm({

                    initialState
                });
                
                break;

            case OBJECT:

                initialState = getFormattedInitialStateFromObjectForm({

                    initialState
                });
                
                break;
        
            default:

                throw new Error(

                    'ReduxX error: invalid initial state'
                );
        }

        return initialState;
    }
);
