import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AUTH_TOKEN } from '../constants';
import {Container, Menu, MenuItem, Header} from 'semantic-ui-react';


class TitleHeader extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN);
        return (
            <Container>
                <Header as="h1" attached="top" color='green' >Hacker News</Header>
                <Menu>
                    <Menu.Item>
                        <Link to="/" className="ml1 no-underline black">
                            New Links
                        </Link>
                    </Menu.Item>
                    {authToken && (
                        <MenuItem>
                            <Link to="/create" className="ml1 no-underline black">
                                Submit A Link
                            </Link>
                        </MenuItem>
                    )}
                    <MenuItem position='right' >
                        {authToken ? (
                            <Link to='/' onClick={() => {
                                    localStorage.removeItem(AUTH_TOKEN)
                                    this.props.history.push(`/`)
                                }}>
                                Logout
                            </Link>
                        ) : (
                            <Link to='/login' >
                                Login
                            </Link>
                        )}
                    </MenuItem>
                </Menu>
            </Container>
        )
    }
}

export default withRouter(TitleHeader)