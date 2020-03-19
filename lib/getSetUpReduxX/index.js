import setInitialState from './setInitialState';


export default Object.freeze(

    ({

        reduxXCore,
        initialState,
        stateKeyMapper

    }) => Object.freeze( useState => {

        if( !useState ) {

            throw new Error(

                'ReduxX error: "useState" input parameter missing in ' +
                'setUpReduxX invocation'
            );
        }

        const {
            
            keyToStateTools

         } = setInitialState({

            globalUseState: useState,
            initialState,
            stateKeyMapper
        });

        Object.assign(
            
            reduxXCore,
            {
                globalUseState: useState,
                keyToStateTools,
            }
        );
    })
);
