import React, { Component } from 'react';
import { AUTH_TOKEN } from '../constants';
import { Form, Header, Button } from 'semantic-ui-react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
    state = {
        login: false,
        email: '',
        password: '', 
        name: '',
    }
    render () {
        const { login, email, password, name } = this.state;
        return (
            <div>
                <Header as='h4' attached='top' textAlign='center'>
                    {login ? 'Login' : 'Sign Up' }
                </Header>
                <Form>
                    {!login && (
                        <Form.Field>
                            <input
                                value={name}
                                onChange={e => this.setState({ name: e.target.value })}
                                type="text"
                                placeholder="Your name"
                            />
                        </Form.Field>
                    )}
                    <Form.Field>
                        <input
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}
                            type="text"
                            placeholder="Your email address"
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            value={password}
                            onChange={e => this.setState({ password: e.target.value })}
                            type="password"
                            placeholder="Choose a safe password"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Mutation mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                            variables={{ email, password, name }}
                            onCompleted={data => this._confirm(data)} 
                        >
                            {mutation =>(
                                <Button onClick={mutation} >
                                    { login ? "Login" : "Create Account"}
                                </Button>
                            )}
                        </Mutation>
                    <Button onClick={() => this.setState({ login: !login })}>
                        {login ? 'need to create an account?' : 'already have an account?'}
                    </Button>
                    </Form.Field>
                </Form>         

            </div>
        )
    }

    _confirm = async (data) => {
        // After the mutation was performed, you’re storing the returned token in localStorage and navigate back to the root route.
        // Mutation returned data relies on GraphQL mutation definition, that’s why we need to get the token depending on which mutation is triggered.
        const { token } = this.state.login ? data.login : data.signup;
        this._saveUserData(token);
        this.props.history.push('/');

    }
    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

}
export default Login; 