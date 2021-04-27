import React from 'react';
import { connect } from "react-redux";

import mapStateToProps from '../lib/mapStateToProps.js';
import mapDispatchToProps from '../lib/mapDispatchToProps.js';
import separateProps from '../lib/separateProps.js';

import Content from '../containers';

let App = props => {
    // separate props to new props
    const newProps = separateProps(props);

    // define geolocation data, one time
    newProps.myLocation ? newProps.actionDefineMyLocation() : null;

    // to render
    return <Content {...newProps} />
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
