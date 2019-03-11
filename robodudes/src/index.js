import React from 'react';//this is the painter that renders the components, imports files and pkgs from react,robot that does dom manipulation
import ReactDOM from 'react-dom';//dom website , onto canvas of website
import './index.css';//add css to each different componment to aplly to app.js component the ./ is in same folder
//if no dot it assumes its javascript
import * as serviceWorker from './serviceWorker';
//library for css dircetly applying to jsx , html
import "tachyons";
import { robots } from "./robots.js";
import CardList from "./CardList";
ReactDOM.render(
 <CardList robots={robots}/>
, document.getElementById('root'));

