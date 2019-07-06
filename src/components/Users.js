import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Feed } from "semantic-ui-react"; 

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

