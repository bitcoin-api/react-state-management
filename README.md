# react-state-management

[![npm version](https://badge.fury.io/js/react-state-management.svg)](https://badge.fury.io/js/react-state-management)

### react-state-management AKA ReduxX
A powerfully light-hearted state management library designed for effortless React code development

## Main Features:
* **all you need to know:** import `getState` and `setState` and you can use those functions anywhere to access and to update your state, so simple!!😌
* uses ultra high tech **React Hooks** to manage your state!🎣
* automatically organizes your state in a very clean way🧹
* popular bonus features such as *Reset to Initial State* and *Multiple ReduxXs*🐲
* perfect to use with React Native📲🐒🍌


--- 

### Table of Contents:

#### 1. [How ReduxX Works](#how-reduxx-works)

- [Step 1: Install ReduxX and Set Your Initial Global State](#step-1-install-reduxx-and-set-your-initial-global-state)
- [Step 2: Set up ReduxX](#step-2-set-up-reduxx)
- [Step 3: Easily Set and Get Values to and from the Global State](#step-3-easily-set-and-get-values-to-and-from-the-global-state)

#### 2. [Bonus Features](#bonus-features)
- [Alternate Input Formats for the ReduxX setState and getState Functions](#alternate-input-formats-for-the-reduxx-setstate-and-getstate-functions)
- [Object Form for Initial State](#object-form-for-initial-state)
- [Reset to Initial State](#reset-to-initial-state)
- [Olde Fashioned State Management and Global Use State](#olde-fashioned-state-management-and-global-use-state)
- [Multiple ReduxXs](#multiple-reduxxs)


## How ReduxX works:


### Step 1: Install ReduxX and Set Your Initial Global State

To install ReduxX, input the following npm command:
```
npm install react-state-management --save
```

In the directory of your main React component, the most parent component that contains all your other components, add the following `reduxX.js` file:

```.js
import ReduxX from 'react-state-management';


export const {

    setUpReduxX,
    setState,
    getState,

    /* Optional Exports: */
    // resetReduxX,
    // getGlobalUseState,
    // oldeFashionedStateManagement

} = ReduxX({

    initialState: [

        {
            keys: [ 'monkey', 'favoriteFood' ],

            value: 'banana',
        },
        {
            // can put a string for the "keys" for single key values
            keys: 'monkey',

            // the value can be of any type,
            // just like using regular React state
            value: { name: 'Curious George', bff: 'Donkey Kong' },
        },
        {
            keys: [ 'monkey', 'height' ],

            value: '69cm',
        },
        {
            keys: [ 'hippo', 'status', 'mood' ],

            value: 'hungry',
        }
    ]    
});
```
> Notes:
>
> a) you can use any number of keys
>
> b) technically you can put this reduxX.js file anywhere, but it makes the most sense to put it in your root folder based on how you access it (in Step 3)
> 
> c) you can alternatively use the [Object Form for Initial State](#object-form-for-initial-state)
>

### Step 2: Set up ReduxX

In the most parent component itself,
the component that contains all your other components,
set up the ReduxX global state like the following:

```.js
import { useState } from 'react';

// Step 2: a) Import the following setUpReduxX function
//            from the file you created in Step 1.
// Note: this particular path assumes the reduxX.js file
//       is in the same directory as this file
import { setUpReduxX } from './reduxX';


// Your "most parent" component
export default () => {

    setUpReduxX( useState );

    return ...
};
```


### Step 3: Easily Set and Get Values to and from the Global State

Now anywhere you normally do a React [setState](https://reactjs.org/docs/react-component.html#setstate), you can now `setState` with ReduxX to access a global state and never have to worry about collisions, so exciting!:

```.js
// some other module

import { createElement as e } from 'react';

import { setState, getState } from '/*path to reduxX.js file, the file created in Step 1*/';


const handleClick = () => {

    /*
       ReduxX Effortless State Setting and Getting
    */

    // set the global state for one or more items like this:

    setState(

        {
            keys: [ 'monkey', 'favoriteFood' ],

            value: 'apple',
        },
        {
            keys: [ 'hippo', 'status', 'mood' ],

            value: 'full'
        }
    );

    // get the global state for an item like this:

    const monkeyHeight = getState( 'monkey', 'height' );

    console.log(

        `The reduxX monkey is ${ monkeyHeight } tall!`
    );

    // should log: The reduxX monkey is 69cm tall!
};


export default () => e( 'div', { onClick: handleClick } );
```
This example also includes a ReduxX `getState` invocation. You can use this function anywhere and this function gets the requested value from the global state! Extreme #swaggy🎅🏿👳🏽🤠👲🏻!

<br/><br/>


Wow that's it, <b>so easy!</b>

All you need to do is import your `./reduxX.js` file you created in Step 1 and then use `setState` and `getState` to manage your global state (like in Step 3).

---
## Bonus Features

### Alternate Input Formats for the ReduxX setState and getState Functions

For your convenience, and for better code readability, the ReduxX `setState` and `getState` functions offer several ways to set and get values to and from the global state.


```.js
import { setState, getState } from '/*path to reduxX.js file, the file created in Step 1*/';

/*
   Different input formats for getState
*/

//  The following four getState invocations are equivalent:
getState( 'user' );
getState( [ 'user' ] );
getState({ keys: 'user' });
getState({ keys: [ 'user' ] });


//  The following three getState invocations are equivalent:
getState( 'user', 'profile' );
getState( [ 'user', 'profile' ] );
getState({ keys: [ 'user', 'profile' ] });


/*
   Different input formats for setState
*/

//  The following four setState invocations are equivalent:
setState( 'user', { id: 69 } );
setState( [ 'user' ], { id: 69 } );
setState({ keys: 'user', value: { id: 69 } });
setState({ keys [ 'user' ], value: { id: 69 } });

//  The following two setState invocations are equivalent:
//  (these invocations involve setting multiple values at once)
setState(

    [ 'user', 'name' ], 'Jar Jar Binks',
    'user', { id: 69 },
    [ 'user', 'game' ], 'React state library author'
);
setState(

    {
        keys: [ 'user', 'name' ],  
        value: 'Jar Jar Binks'
    },
    {
        keys: [ 'user' ],  
        value: { id: 69 }
    },
    {
        keys: [ 'user', 'game' ],  
        value: 'React state library author'
    }
);
```


### Object Form for Initial State

In [Step 1](#step-1-install-reduxx-and-set-your-initial-global-state), we set up our initial state with an array of
objects that each have a `keys` and a `value` property. We can alternatively set up our initial state with an object.
This can be more suitable for ReduxX apps with a larger number of state keys because it easily allows you to organize
your initial state in a modular way (because it easily allows you to put sections of your initial state in different files if you want).

The code below shows you how to use the *Object Form for Initial State* to set the same initial state as in [Step 1](#step-1-install-reduxx-and-set-your-initial-global-state):

```.js
import ReduxX, {

    /*
        General Use Case:
            use the ReduxX VALUE key to set the initial state value
            for the specified key
    */
    VALUE,

    /*
        Common/Simple Use Case:
            alternatively use the ReduxX special "v" function
            to specify the initial state value
            for simple ReduxX initial state object configurations
    */
    v,

} from 'react-state-management';


export const {

    setUpReduxX,
    setState,
    getState,

    /* Optional Exports: */
    // resetReduxX,
    // getGlobalUseState,
    // oldeFashionedStateManagement

} = ReduxX({

    initialState: {

        monkey: {

            [VALUE]: { name: 'Curious George', bff: 'Donkey Kong' },

            favoriteFood: v( 'banana' ),

            height: {

                [VALUE]: '69cm'
            }
        },

        hippo: {

            status: {

                mood: v( 'hungry' )
            }
        }
    }
});
```


### Reset to Initial State

To reset your app's ReduxX state to the initial state
specified in [Step 1](#step-1-install-reduxx-and-set-your-initial-global-state),
simply execute the `resetReduxX` function as follows:

```.js
import { createElement as e } from 'react';

import { resetReduxX } from '/*path to reduxX.js file, the file created in Step 1*/';


export default () => e( 'div', { onClick: resetReduxX } );
```
> **Note:** the commented out `resetReduxX` function in
[Step 1](#step-1-install-reduxx-and-set-your-initial-global-state) 
must be uncommented so that it's exported🦖

You can also specify only certain keys to be reset using the optional
`listOfKeysToExclude` and `listOfKeysToInclude` input values:
```.js

resetReduxX({

    listOfKeysToExclude: [
        [ 'monkey', 'favoriteFood' ],
        [ 'hippo', 'status', 'mood' ]
    ]
});

// or

resetReduxX({

    listOfKeysToInclude: [
        [ 'monkey', 'favoriteFood' ],
        [ 'hippo', 'status', 'mood' ]
    ]
});
```
### Olde Fashioned State Management and Global Use State
You can use the `oldeFashionedStateManagement`
system to manually adjust your
ReduxX initialized state. 

You can also access and alter the global state manually
using `getGlobalUseState()` to get the most parent component's `useState`
function:

```.js
// some other module

import { createElement as e } from 'react';

import { oldeFashionedStateManagement, getGlobalUseState } from '/*path to reduxX.js file, the file created in Step 1*/';

/*
    Note:
        the commented out `oldeFashionedStateManagement` object in Step 1
        must be uncommented so that it's exported🦕
        same with the commented out `getGlobalUseState` function🦖
*/

const handleClick = ({ setCount }) => {

    setCount( '🐒🍌' );

    /*
       Olde Fashioned State Setting and State Getting:
    */
    const {

        stateKeyMapper,
        KEY,
        getStateKeyToStateTools

    } = oldeFashionedStateManagement;

    /*
        NOTE:
            the following assumes the state has been set up
            like how it was in the first section
    */
    const stateKey = stateKeyMapper.monkey.favoriteFood[ KEY ];

    const stateKeyToStateTools = getStateKeyToStateTools();

    const stateTools = stateKeyToStateTools[ stateKey ];

    const { stateValue, stateSetter } = stateTools;

    console.log( stateValue );
    // will log 'banana'

    stateSetter( 'apple' );
    /*
        sets the state value for the [ 'monkey', 'favoriteFood' ]
        state keys to be 'apple'
        
        this is the state setter function
        that's returned by React.useState( ... ) 
        (the one associated with that state value)
    */
};


const div = () => {

    /*
       State Setting and State Getting Using Global Use State:
    */
    const globalUseState = getGlobalUseState();

    const [ count, setCount ] = globalUseState( 1 );

    console.log( count );
    // will log 1

    return e( 'div', { onClick: () => handleClick({ setCount }) } );
};
```

### Multiple ReduxXs
It should be noted that you can have multiple ReduxX
instances. This could be useful if you have a larger app.
Your file folder structure could look something like this:
```
/
|
|
/LargeAppComponentA
    reduxX.js // file set up in step 1
    main.js
    ...
|
|
/LargeAppComponentB
    reduxX.js // another file for this large component set up in step 1
    main.js
    ...
|
|
...
```

Your ReduxX, your way!🦑