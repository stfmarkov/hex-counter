import * as React from "react";
import { Route } from "react-router-dom";

import Menu from "./Menu"

import Counter from "./CounterMain"
import About from "./About"

export default class PrimaryLayout extends React.Component {
    public render() {  
      return (
        <div className="primary-layout">
          <header>
            
            <Menu></Menu>
  
          </header>
          <div>
            <Route exact path="/" component={Counter} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      )
    }
  }