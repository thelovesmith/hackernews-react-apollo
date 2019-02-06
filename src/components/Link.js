import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react';
import { AUTH_TOKEN } from '../constants';
import { timeDifferenceForDate } from '../utils';


class Link extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN);
        return (
            <Feed.Event >
                <Feed.Content>
                    <Feed.Meta >
                        <span className="gray">{this.props.index + 1}.</span>
                        {authToken && (
                            <Feed.Like  onClick={() => this._voteForLink()}>
                                ▲
                            </Feed.Like>
                        )}
                    </Feed.Meta>
                    <Feed.Summary style={{ padding: '10px' }}>
                        {this.props.link.description} ({this.props.link.url})
                    </Feed.Summary>
                    <div className="f6 lh-copy gray">
                        {this.props.link.votes.length} votes | by{' '}
                        {this.props.link.postedBy
                            ? this.props.link.postedBy.name
                            : 'Unknown'}{' '}
                        {timeDifferenceForDate(this.props.link.createdAt)}
                    </div>
                </Feed.Content>
            </Feed.Event>
        )
    }
}

export default Link;