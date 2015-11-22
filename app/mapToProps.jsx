import {fuckClickAC} from './actions/actionsCreators.jsx';
import { reduxReactRouter, routerStateReducer, ReduxRouter,pushState } from 'redux-router';

export function mapStateToProps(state){
  return {
    fuckState: state.fuckState,
    routerState: state.router.location.query.q
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onFuckClick: (text) => dispatch(fuckClickAC(text)),
    pushState
  }
}
