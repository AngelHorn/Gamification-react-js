import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {Provider, connect, dispatch} from 'react-redux';
import {ReduxRouter, routerStateReducer, reduxReactRouter} from 'redux-router';
import { Router, Route, Link, IndexRedirect } from 'react-router'

import createHistory from 'history/lib/createBrowserHistory';
import {devTools, persistState} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

import rootReducer from './rootReducer.jsx';

import RootComponent from './RootComponent.jsx';
//引入下级组件
import * as MainContainers from './containers/index.jsx';

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
                          <Route
                              path="inbox"
                              components={MainContainers.InboxContainer}/>
                          <Route
                              path="today"
                              components={MainContainers.TodayContainer}/>
                          <Route
                              path="next"
                              components={MainContainers.NextContainer}/>
                          <Route
                              path="waiting"
                              components={MainContainers.WaitingContainer}/>
                          <Route
                              path="schedule"
                              components={MainContainers.ScheduleContainer}/>
                          <Route
                              path="done"
                              components={MainContainers.DoneContainer}/>
                          <Route
                              path="trash"
                              components={MainContainers.TrashContainer}/>
                          <Route
                              path="tree"
                              components={MainContainers.TreeContainer}/>
                          <IndexRedirect to="today"/>
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
