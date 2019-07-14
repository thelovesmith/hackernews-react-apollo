import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
// eslint-disable-next-line
import { Card, Form, Feed, } from 'semantic-ui-react';
import { FEED_QUERY } from './LinkList';


const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

class CreateLink extends Component {
  state = {
    description: '',
    url: '',
  }
  render() {
    const { description, url } = this.state;
    return (
      <Form >
        <Card>
          <Form.Field>
            <input className='mb2' value={description} onChange={e => this.setState({ description: e.target.value })} type='text'
              placeholder='The description for the link'
            />
          </Form.Field>
          <Form.Field>
            <input className='mb2' value={url} onChange={e => this.setState({ url: e.target.value })} type='text'
              placeholder='The URL for the link'
            />
          </Form.Field>
        </Card>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ description, url }}
          onCompleted={() => this.props.history.push('/')}
          // The UPDATE function we are passing asa prop works in a very similar way as before. You first read the current state of the results of the FEED_QUERY. Then you insert the newest link at beginning and write the query results back to the store.
          update={(store, { data: { post } }) => {
            const data = store.readQuery({ query: FEED_QUERY })
            data.feed.links.unshift(post)
            store.writeQuery({
              query: FEED_QUERY,
              data
            })
          }}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </Form>
    )
  }
}

export default CreateLink;