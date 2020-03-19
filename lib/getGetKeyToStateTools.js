export default Object.freeze(
    ({ reduxXCore }) => Object.freeze( () => {

        if( !reduxXCore.keyToStateTools ) {

            throw new Error(

                'ReduxX error: ReduxX has not been set up yet'
            );
        }

        return reduxXCore.keyToStateTools;
    })
);
