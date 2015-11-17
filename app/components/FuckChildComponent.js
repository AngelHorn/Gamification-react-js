import React from 'react';
//import {Link} from 'react-router';
export default class FuckChildComponent extends React.Component {
    render() {
        console.log(this.props);
        //this.props.location.state.FuckClick(this.props.location.state.fuckState);
        return (
            <div>
                <h1 onClick={()=>this.props.onFuckClick(this.props.fuckState)}>
                    Hello world 我是儿子!!{this.props.fuckState}
                </h1>
            </div>
        )
    }
}
