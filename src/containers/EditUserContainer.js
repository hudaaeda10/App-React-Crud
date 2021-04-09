import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponents from '../components/BackComponents'

export default class EditUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponents />
                <h1>Edit User</h1>
            </Container>
        )
    }
}
