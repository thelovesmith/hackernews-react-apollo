import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card } from "semantic-ui-react"; 
import  User  from './User';

const FEED_QUERY = gql`
    {
        feed {
            users{
                id
                name
            }
        }
    }
`

class Users extends Component {
    render() {
        return(
            <Query query={FEED_QUERY}>
                {({ loading, error, data})=> {
                    if (loading) return <div>Fetcing</div>
                    if (error) return <div>Error, {error.data}</div>

                    const usersList = data.feed.users;
                    return (
                        <Card.Group>
                            {usersList.map((user, index)=> (
                                <User key={user.id} user={user} index={index} />
                            ))}
                        </Card.Group>
                    )
                }}
            </Query>
        )
    }
}
export default Users;