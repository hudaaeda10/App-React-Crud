import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponents from '../components/BackComponents'

export default class DetailUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponents />
                <h1>details user</h1>
            </Container>
        )
    }
}
