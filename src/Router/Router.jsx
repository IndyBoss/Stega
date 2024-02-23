import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import Header from "../Header/Header";
import Menu from "../menu/menu";

class Router extends React.Component {

    componentDidMount = () => {
        document.title = "My Steganography manager"
    }

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <main>
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                <Route path="*">
                  <div id="not-authorized-page">
                    <span class="message">
                      Your princess is in another castle
                    </span>
                  </div>
                </Route>
              </Switch>
              </main>

      </div>
    );
  }
}

export default Router