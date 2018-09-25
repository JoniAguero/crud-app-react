import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import { Posts } from './Posts/Posts';
import { SinglePost } from './SinglePost/SinglePost';
import Inicio from './Inicio/Inicio';

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

    eliminarPost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then( res => {
                if (res.status === 200){
                    const posts = [...this.state.posts];
                    let resultado = posts.filter(post => post.id !== id);
                    this.setState({
                        posts: resultado
                    })
                }
            });
    }

    render() {
        return (
        <BrowserRouter>
        <div>
            <Header />
            <Navigation />
            <Switch>
                <Route exact path="/" render={Inicio} />
                        <Route exact path="/posts" render={() => { return (<Posts posts={this.state.posts} 
                               eliminarPost={this.eliminarPost} />) }} />
                <Route exact path="/post/:id" render={ (props) => {
                    let id = props.location.pathname.replace('/post/', '');
                    const posts = this.state.posts;
                    let filtro = posts.filter( post => ( post.id === Number(id) ))
                    return(
                        <SinglePost post={filtro[0]}/>
                    )
                }} />
            </Switch>
        </div>
            
        </BrowserRouter>
        )
    }
}

export default Router;
