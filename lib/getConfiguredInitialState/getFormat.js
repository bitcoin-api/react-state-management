import { INITIAL_STATE_FORMAT } from '../tools/constants';
const { ARRAY, OBJECT, INVALID } = INITIAL_STATE_FORMAT;


export default Object.freeze(

    ({        
        
        initialState,

    }) => {

        switch( typeof initialState ) {
            
            case 'object':

                if( Array.isArray( initialState ) ) {

                    return ARRAY;                    
                }
                else if( !!initialState ) {

                    return OBJECT;
                }
        }

        return INVALID;
    }
);
