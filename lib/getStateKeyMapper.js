import { getGuid } from './tools/utils';
import { REDUXX_SPECIAL_KEY } from './tools/constants';


const getBaseStateKeyMapperObject = Object.freeze(

    () => {

        const baseStateKeyMapperObject = {};

        baseStateKeyMapperObject[ REDUXX_SPECIAL_KEY ] = getGuid();

        return baseStateKeyMapperObject;
    }
);


export default Object.freeze(

    ({

        initialState,

    }) => {

        const stateKeyMapper = {};

        initialState.forEach( initialStateData => {

            const { keys } = initialStateData;

            const firstKey = keys[0];

            if( !stateKeyMapper[ firstKey ] ) {

                stateKeyMapper[ firstKey ] = getBaseStateKeyMapperObject();
            }

            let currentStateKeyMapperObject = stateKeyMapper[ firstKey ];

            for( let i = 1; i < keys.length; i++ ) {

                const currentKey = keys[ i ];

                if( !currentStateKeyMapperObject[ currentKey ] ) {

                    currentStateKeyMapperObject[ currentKey ] = (

                        getBaseStateKeyMapperObject()
                    );
                }

                currentStateKeyMapperObject = currentStateKeyMapperObject[

                    currentKey
                ];
            }
        });

        return stateKeyMapper;
    }
);
