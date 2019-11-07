import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js';

//this just returns the element on which the react application will be mounted!
function domElementGetter() {
  return document.getElementById("home")
}

// create resembled lifecycles of react inside single-spa.js
const reactLifecycles = singleSpaReact({
  React, //React Instance
  ReactDOM, //ReactDOM Instance
  rootComponent: Home, //React component that will be actually rendered in id="home" element
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];