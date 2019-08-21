import React, { Component } from 'react';
import Link from './Link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Feed } from 'semantic-ui-react';

export const FEED_QUERY = gql`
    {
        feed {
            count
            links {
                id
                createdAt
                description
                url
                postedBy {
                  id
                  name
                }
                votes {
                  id 
                  user {
                    id
                  }
                }
            }
        }
    }
`


class LinkList extends Component {
  // !this function is for upating the store using Apollo's caching
  // !Now you’re retrieving the link that the user just voted for from that list. You’re also manipulating that link by resetting its votes to the votes that were just returned by the server.
  // !You start by reading the current state of the cached data for the FEED_QUERY from the store.
  // !Finally, you take the modified data and write it back into the store
  updateCacheAfterVote = (store, createVote, linkId) => {
    console.log('its hitting')
    const data = store.readQuery({ query: FEED_QUERY })

    const votedLink = data.feed.links.find(link => link.id === linkId)
    votedLink.votes = createVote.link.votes

    store.writeQuery({ query: FEED_QUERY, data })
  }
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
                <Link
                  key={link.id}
                  link={link}
                  index={index}
                  updateStoreAfterVote={this.updateCacheAfterVote}
                />
              ))}
            </Feed>
          )
        }}
      </Query>
    )
  }
}

export default LinkList;