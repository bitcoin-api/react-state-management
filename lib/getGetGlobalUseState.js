export default Object.freeze(
    ({ reduxXCore }) => Object.freeze( () => {

        if( !reduxXCore.globalUseState ) {

            throw new Error(

                'ReduxX error: ReduxX has not been set up yet'
            );
        }

        return reduxXCore.globalUseState;
    })
);
