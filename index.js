import { AppRegistry } from 'react-native'
import { Providerß } from 'react-redux'
import React, { Component } from 'react'
import { createStore } from 'redux'
import reducer from './src/reducers'
import App from './App';

const store = createStore(reducer)

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('WordzPlayer', () => Root);
