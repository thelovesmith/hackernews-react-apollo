import React, { Component } from 'react';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import TitleHeader from './Header';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="center w85">
        <TitleHeader />
        <div className="ph3 pv1">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
