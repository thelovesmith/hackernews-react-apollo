import React, { Component } from 'react';


class Link extends Componenet {
    render() {
        return (
            <div>
                <div>
                    {this.props.description} ({this.props.link.url})
                </div>
            </div>
        )
    }
}

export default Link;