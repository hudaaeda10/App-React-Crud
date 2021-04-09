import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import EditUserContainer from './containers/EditUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';

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
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer  users={this.state.users}/>
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
