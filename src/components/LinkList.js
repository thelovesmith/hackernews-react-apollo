import React, { Component } from 'react';
import  Link  from './Link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Feed } from 'semantic-ui-react';

const FEED_QUERY = gql`
    {
        feed {
            links {
                id
                createdAt
                description
                url
            }
        }
    }
`


class LinkList extends Component {
    render() {
        return (
            <Query query={FEED_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const linksToRender = data.feed.links

                    return (
                        <Feed>
                            {linksToRender.map((link, index) => (
                                <Link key={link.id} link={link} index={index} />
                            ))}
                        </Feed>
                    )
                }}
            </Query>
        )
    }
}

export default LinkList;