// import { createOvermind } from 'overmind';
// import { Provider } from 'overmind-react';
// import * as React from 'react';
// import { render } from 'react-dom';
// import { app as overmind } from './app';
import App from "./js/App";
// import 'todomvc-common/base.css';
// import 'todomvc-app-css/index.css';

//MW CurrentModule handles the rendering and imports that stule information
import { CurrentModule } from "./js/CurrentModule";
if (module.hot) {
  module.hot.accept(["./js/app", "./js/components/FrontPage"], () => {
    CurrentModule(App);
  });
}

CurrentModule(App);
