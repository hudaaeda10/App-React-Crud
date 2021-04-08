import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import TableComponent from './components/TableComponent'

export default class App extends Component {
  state = {
    title: 'Code Lyoko Academy',
    users: [
      {
        id: 1,
        nama: 'Kana Hanazawa',
        alamat: 'Garut',
        umur: 23,
        nohp: "02123452221"
      },
      {
        id: 2,
        nama: 'Horimiya',
        alamat: 'Jepara',
        umur: 21,
        nohp: "0212345213"
      },
      {
        id: 3,
        nama: 'Aelita Stone',
        alamat: 'Perancis',
        umur: 20,
        nohp: "02182927287"
      }
    ]
  }
  render() {
    return (
      <div>
        <NavbarComponent/>
        <JumbotronComponent title={this.state.title}/>
        <TableComponent users={this.state.users} />
      </div>
    )
  }
}
