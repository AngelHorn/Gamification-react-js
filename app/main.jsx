import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {Provider, connect, dispatch} from 'react-redux';
import {ReduxRouter, routerStateReducer, reduxReactRouter} from 'redux-router';
import {Route} from 'react-router';

import createHistory from 'history/lib/createBrowserHistory';
import {devTools, persistState} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

import rootReducer from './rootReducer.jsx';

import RootComponent from './RootComponent.jsx';

//import request from 'superagent'; //ajax

const store = compose(
    reduxReactRouter({createHistory}),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(rootReducer);

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            <ReduxRouter>
              <Route path="/" component={RootComponent}>
              </Route>
            </ReduxRouter>
        </Provider>

      </div>
    );
    //   <DebugPanel top right bottom>
    //     <DevTools store={store} monitor={LogMonitor}/>
    //   </DebugPanel>
  }
}

ReactDOM.render(
  <Root/>, document.getElementById('app'));
