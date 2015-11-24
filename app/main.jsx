import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {Provider, connect, dispatch} from 'react-redux';
import {ReduxRouter, routerStateReducer, reduxReactRouter} from 'redux-router';
import { Router, Route, Link, IndexRoute } from 'react-router'

import createHistory from 'history/lib/createBrowserHistory';
import {devTools, persistState} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

import rootReducer from './rootReducer.jsx';

import RootComponent from './RootComponent.jsx';
//引入下级组件
import HeaderComponent from './components/HeaderComponent.jsx';
import LeftNavComponent from './components/LeftNavComponent.jsx';
import DataGridComponent from './components/DataGridComponent.jsx';
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
                  <Router>
                      <Route path="/" component={RootComponent}>
                          <IndexRoute components={{header: HeaderComponent, sidebar: LeftNavComponent}}/>
                          <Route
                              path="fuck"
                              components={{header: HeaderComponent, sidebar: LeftNavComponent,main:DataGridComponent}}/>
                      </Route>
                  </Router>
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
