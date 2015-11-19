import React from 'react';
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {Provider, connect, dispatch} from 'react-redux';
import {ReduxRouter, routerStateReducer, reduxReactRouter} from 'redux-router';
import {Route} from 'react-router';

import createHistory from 'history/lib/createBrowserHistory';
import {devTools, persistState} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

import rootReducer from './rootReducer.jsx';

import FuckContainer from './containers/FuckContainer.jsx';
import FuckChildComponent from './components/FuckChildComponent.jsx';

//import request from 'superagent'; //ajax

const store = compose(reduxReactRouter({createHistory}), devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(createStore)(rootReducer);

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => {
            return(
              <ReduxRouter>
                <Route path="/" component={FuckContainer}>
                  <Route path="/" component={FuckContainer}>
                    <Route path="/" component={FuckContainer}>
                      <Route path="/" component={FuckContainer}>
                        <Route path="/" component={FuckContainer}>
                          <Route path="child" state={this.props} component={FuckChildComponent}/>
                        </Route>
                      </Route>
                    </Route>
                  </Route>
                </Route>
              </ReduxRouter>
            )
          }}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor}/>
        </DebugPanel>
      </div>
    );
  }
}

React.render(
  <Root/>, document.body);
