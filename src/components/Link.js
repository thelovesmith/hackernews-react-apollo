import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { AUTH_TOKEN } from '../constants';
import { timeDifferenceForDate } from '../utils';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const VOTE_MUTATION = gql`
    mutation VoteMutation($linkId: Id!) {
        vote(linkId: $linkId) {
            id 
            link { 
                votes {
                    id 
                    user {
                        id
                    }
                }
            }
            user {
                id
            }
        }
    }
`

class Link extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN);
        console.log(this, 'props')
        return (
            <Feed.Event style={{ padding: '10px 0px 10px 0px', backgroundColor: '#AEFFB4', margin: '5px 0 5px 0' }}>
                <Feed.Content>
                    <Feed.Meta >
                        <Feed.Label >{this.props.index + 1}. ({this.props.link.url})</Feed.Label>
                        
                    </Feed.Meta>
                    <Feed.Summary style={{ padding: '10px'}}>
                        {this.props.link.description} 
                    <Feed.Extra className="f6 lh-copy gray">
                            {this.props.link.votes ? this.props.link.votes.length : 0 } votes | Submitted by{' '}
                        {this.props.link.postedBy
                            ? this.props.link.postedBy.name
                            : 'Unknown'}{' '}
                        <Feed.Date style={{paddingTop: '5px'}}>
                            {timeDifferenceForDate(this.props.link.createdAt)}
                        </Feed.Date>
                            {authToken && (
                                <Mutation mutation={VOTE_MUTATION} variables={{ linkId: this.props.link.id }} >
                                    {voteMutation => (

                                        <Feed.Like onClick={voteMutation}>
                                            <Icon name='like' />
                                        </Feed.Like>
                                    )}
                                </Mutation>
                            )}
                    </Feed.Extra>
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
        )
    }
}

export default Link;