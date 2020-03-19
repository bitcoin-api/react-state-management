import {

    REDUXX_SPECIAL_KEY,
    getSetUpReduxX,
    getResetReduxX,
    getConfiguredInitialState,
    getStateKeyMapper,
    getGetState,
    getSetState,
    getGetGlobalUseState,
    getGetKeyToStateTools,
    reduxXSpecialVFunction,

} from './lib';


const ReduxX = Object.freeze( ({

    initialState,

}) => {

    initialState = getConfiguredInitialState({

        initialState,
    });

    const stateKeyMapper = getStateKeyMapper({

        initialState,
    });

    const reduxXCore = Object.seal({

        globalUseState: null,
        keyToStateTools: null
    });

    return Object.freeze({

        setUpReduxX: getSetUpReduxX({

            reduxXCore,
            initialState,
            stateKeyMapper
        }),

        resetReduxX: getResetReduxX({

            reduxXCore,
            initialState,
            stateKeyMapper
        }),

        getState: getGetState({

            reduxXCore,
            stateKeyMapper
        }),

        setState: getSetState({

            reduxXCore,
            stateKeyMapper
        }),

        getGlobalUseState: getGetGlobalUseState({ reduxXCore }),

        oldeFashionedStateManagement: Object.freeze({

            stateKeyMapper,

            KEY: REDUXX_SPECIAL_KEY,

            getStateKeyToStateTools: getGetKeyToStateTools({ reduxXCore }),
        }),
    });
});


export {

    REDUXX_SPECIAL_KEY as VALUE,
    reduxXSpecialVFunction as v,
    ReduxX as default
};