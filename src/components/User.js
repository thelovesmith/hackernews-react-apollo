import React, { Component } from 'react';
import {Card, Icon} from 'semantic-ui-react';


class User extends Component {
    render() {
        console.log(this.props, "this is users props");
        return(
            <Card>
                <Card.Content>
                    <Card.Header>{this.props.user.name}</Card.Header>
                    <Card.Meta>{this.props.user.id}</Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}


export default User;
