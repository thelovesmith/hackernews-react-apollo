import React, {Component} from 'react';
import { AUTH_TOKEN } from '../constants';
import { Form, Header, Button } from 'semantic-ui-react';

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
        login: true,
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
                    <Button onClick={() => this._confirm()}>
                        {login ? "Login" : "Create Account"}
                    </Button>
                    <Button onClick={() => this.setState({ login: !login })}>
                        {login ? 'need to create an account?' : 'already have an account?'}
                    </Button>
                </Form>         

            </div>
        )
    }

    _confirm = async () => {
        //will be implemented
    }
    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

}
export default Login; 