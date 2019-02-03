import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'


class Link extends Component {
    render() {
        return (
            <div>
                <Card>
                    {this.props.link.description} ({this.props.link.url})
                </Card>
            </div>
        )
    }
}

export default Link;