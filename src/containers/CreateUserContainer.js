import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponents from '../components/BackComponents'

export default class CreateUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponents />
                <h1>Create User</h1>
            </Container>
        )
    }
}
