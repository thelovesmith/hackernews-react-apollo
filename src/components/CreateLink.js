import React, { Component } from 'react'; 
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Container, Card, } from 'semantic-ui-react';


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
            <Container className='flex flex-column mt3'>
                <Card>
                    <input className='mb2' value={description} onChange={e => this.setState({description: e.target.value})} type='text'
                    placeholder='The description for the link'
                    />
                    <input className='mb2' value={url} onChange={e => this.setState({url: e.target.value})} type='text'
                    placeholder='The URL for the link'
                    />
                </Card>
                <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
                    {postMutation => <button onClick={postMutation}>Submit</button>}
                </Mutation>
            </Container>
        )
    }
}

export default CreateLink;