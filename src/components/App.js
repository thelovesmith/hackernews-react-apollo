import React, { Component } from 'react';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import TitleHeader from './Header';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <div className="center w85">
        <TitleHeader />
        <Container >
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </div>
    )
  }
}

export default App;
