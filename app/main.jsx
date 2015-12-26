import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {Provider, connect, dispatch} from 'react-redux';
import { Router, Route, Link, IndexRedirect } from 'react-router'
import "babel-polyfill"

import createBrowserHistory from 'history/lib/createBrowserHistory';
import {devTools, persistState} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
import thunkMiddleware from 'redux-thunk'

import rootReducer from './rootReducer.jsx';

import RootComponent from './RootComponent.jsx';
//引入下级组件
import * as ContainersList from './containers/index.jsx';

//import request from 'superagent'; //ajax

const store = compose(
    applyMiddleware(
        thunkMiddleware
    ),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(rootReducer);

//console.log(store.getState());
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

class Root extends React.Component {
  render() {
      return (
          <div>
              <Provider store={store}>
                  <Router>
                      <Route path="/" component={RootComponent}>
                          <Route
                              path="inbox"
                              components={ContainersList.InboxContainer}/>
                          <Route
                              path="today"
                              components={ContainersList.TodayContainer}/>
                          <Route
                              path="next"
                              components={ContainersList.NextContainer}/>
                          <Route
                              path="waiting"
                              components={ContainersList.WaitingContainer}/>
                          <Route
                              path="schedule"
                              components={ContainersList.ScheduleContainer}/>
                          <Route
                              path="done"
                              components={ContainersList.DoneContainer}/>
                          <Route
                              path="trash"
                              components={ContainersList.TrashContainer}/>
                          <Route
                              path="tree"
                              components={ContainersList.TreeContainer}/>
                          <Route
                              path="chart"
                              components={ContainersList.ChartContainer}/>
                          <Route
                              path="shop"
                              components={ContainersList.ShopContainer}/>
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
