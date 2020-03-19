'use strict';


describe( 'The Official ReduxX Test Suite', function() {

    describe( '/', function() {

        require( './index.test' );
    });

    describe( '/lib', function() {

        require( './lib/getResetReduxX.test' );
        require( './lib/getGetGlobalUseState.test' );
        require( './lib/getGetKeyToStateTools.test' );
        require( './lib/getStateKeyMapper.test' );
        require( './lib/index.test' );
        require( './lib/reduxXSpecialVFunction.test' );
    });

    describe( '/lib/getSetUpReduxX', function() {

        require( './lib/tools/constants.test' );
        require( './lib/tools/utils.test' );
    });
    
    describe( '/lib/getSetUpReduxX', function() {

        require( './lib/getSetUpReduxX/index.test' );
        require( './lib/getSetUpReduxX/setInitialState.test' );
    });

    describe( '/lib/getSetState', function() {

        require( './lib/getSetState/index.test' );
        require( './lib/getSetState/getFormattedArguments.test' );
    });

    describe( '/lib/getGetState', function() {

        require( './lib/getGetState/index.test' );
        require( './lib/getGetState/getFormattedArguments.test' );
    });

    describe( '/lib/getConfiguredInitialState', function() {

        require( './lib/getConfiguredInitialState/index.test' );
        require( './lib/getConfiguredInitialState/getFormat.test' );
        require( './lib/getConfiguredInitialState/getFormattedInitialStateFromArrayForm.test' );
        require( './lib/getConfiguredInitialState/getFormattedInitialStateFromObjectForm.test' );
    });
});