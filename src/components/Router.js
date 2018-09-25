import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import { Posts } from './Posts/Posts';

export class Router extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.obtenerPosts();
    }

    obtenerPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then( res => {
            this.setState({
                posts: res.data
            })
        })
    }

    render() {
        return (
        <BrowserRouter>
        <div>
            <Header />
            <Navigation />
            <Switch>
                <Route exact path="/" render={() => { return (<Posts posts={this.state.posts} /> )}} />
            </Switch>
        </div>
            
        </BrowserRouter>
        )
    }
}

export default Router;
