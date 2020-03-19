'use strict';

const ROOT_PATH = '../stoneAgeCompatibleReduxX/';

const MODULE_PATH = 'index';

const FULL_MODULE_PATH = ROOT_PATH + MODULE_PATH;

const expect = require( 'chai' ).expect;

const proxyquire = require( 'proxyquire' ).noCallThru();


describe( MODULE_PATH, function() {

    const getModule = () => {

        const mockLibIndex = {

            getSetUpReduxX: (
                
                ({
                    reduxXCore,
                    initialState,
                    stateKeyMapper

                }) => {
                    
                    expect( reduxXCore ).to.deep.equal({
                        globalUseState: null,
                        keyToStateTools: null
                    });

                    expect( initialState ).to.deep.equal({
                        initialState: 'yea'
                    });

                    expect( stateKeyMapper ).to.deep.equal({
                        stateKeyMapper: 'yea'
                    });
                    
                    return {
                        setUpReduxX: 'yea'
                    };
                }
            ),
            getResetReduxX: (
                
                ({
                    reduxXCore,
                    initialState,
                    stateKeyMapper

                }) => {
                    
                    expect( reduxXCore ).to.deep.equal({
                        globalUseState: null,
                        keyToStateTools: null
                    });

                    expect( initialState ).to.deep.equal({
                        initialState: 'yea'
                    });

                    expect( stateKeyMapper ).to.deep.equal({
                        stateKeyMapper: 'yea'
                    });
                    
                    return {
                        resetReduxX: 'yea'
                    };
                }
            ),
            getConfiguredInitialState: (
                
                ({
                    initialState,
                }) => {
                    
                    expect( initialState ).to.deep.equal({
                        initialStateInput: 'yea'
                    });
                    
                    return {
                        initialState: 'yea'
                    };
                }
            ),
            getStateKeyMapper: (
                
                ({
                    initialState,

                }) => {
                    
                    expect( initialState ).to.deep.equal({
                        initialState: 'yea'
                    });

                    return {
                        stateKeyMapper: 'yea'
                    };
                }
            ),
            getGetState: (
                
                ({
                    reduxXCore,
                    stateKeyMapper

                }) => {
                    
                    expect( reduxXCore ).to.deep.equal({
                        globalUseState: null,
                        keyToStateTools: null
                    });

                    expect( stateKeyMapper ).to.deep.equal({
                        stateKeyMapper: 'yea'
                    });
                    
                    return {
                        getState: 'yea'
                    };
                }
            ),
            getSetState: (
                
                ({
                    reduxXCore,
                    stateKeyMapper

                }) => {
                    
                    expect( reduxXCore ).to.deep.equal({
                        globalUseState: null,
                        keyToStateTools: null
                    });

                    expect( stateKeyMapper ).to.deep.equal({
                        stateKeyMapper: 'yea'
                    });
                    
                    return {
                        setState: 'yea'
                    };
                }
            ),
            getGetGlobalUseState: (
                
                ({
                    reduxXCore,

                }) => () => {
                    
                    expect( reduxXCore ).to.deep.equal({
                        globalUseState: null,
                        keyToStateTools: null
                    });
                    
                    return {
                        globalUseState: 'yea'
                    };
                }
            ),
            getGetKeyToStateTools: (
                
                ({
                    reduxXCore,

                }) => () => {
                    
                    expect( reduxXCore ).to.deep.equal({
                        globalUseState: null,
                        keyToStateTools: null
                    });
                    
                    return {
                        keyToStateTools: 'yea'
                    };
                }
            ),
            reduxXSpecialVFunction: () => ({ specialV: 'v' }),
            REDUXX_SPECIAL_KEY: 'xxx'
        };

        const proxyquireStubs = {

            './lib': mockLibIndex,
        };

        return proxyquire(

            FULL_MODULE_PATH,
            proxyquireStubs
        );
    };

    it( 'normal operation', function() {

        const ReduxX = getModule().default;

        const reduxX = ReduxX({

            initialState: {
                initialStateInput: 'yea'
            },

        });

        expect( reduxX.setUpReduxX ).to.deep.equal({
            setUpReduxX: "yea"
        });

        expect( reduxX.resetReduxX ).to.deep.equal({
            resetReduxX: "yea"
        });

        expect( reduxX.getState ).to.deep.equal({
            getState: "yea"
        });

        expect( reduxX.setState ).to.deep.equal({
            setState: "yea"
        });

        expect( reduxX.oldeFashionedStateManagement.KEY ).to.equal( 'xxx' );

        expect(
        
            reduxX.oldeFashionedStateManagement.stateKeyMapper

        ).to.deep.equal({
            
            "stateKeyMapper": "yea"
        });

        expect(

            reduxX.getGlobalUseState()

        ).to.deep.equal({

            globalUseState: 'yea'
        });

        expect(

            reduxX.oldeFashionedStateManagement.getStateKeyToStateTools()

        ).to.deep.equal({

            keyToStateTools: 'yea'
        });
    });
});