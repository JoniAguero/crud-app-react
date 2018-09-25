import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Inicio from './Inicio/Inicio';

import { Posts } from './Posts/Posts';
import { SinglePost } from './SinglePost/SinglePost';
import { Formulario } from './Formulario/Formulario';

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

    crearPost = (post) => {
        if(post.title !== '' && post.body !== '') {
            axios.post(`https://jsonplaceholder.typicode.com/posts/`, {post})
                .then( res => {
                    if(res.status === 201) {
                        // Obtengo el ID
                        let idPost = {id: res.data.id}
                        // Uno el ID con el Post (vienen separado)
                        const newPost = Object.assign({}, res.data.post, idPost)
                        // Agrego un nuevo Post
                        this.setState(prevState => ({
                            posts: [...prevState.posts, newPost]
                        }))
                        swal({
                            type: 'Tarea Cumplida!',
                            title: 'Se ha creado el post.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                });
        }
    }

    render() {
        return (
        <BrowserRouter>
        <div>
            <Header />
            <Navigation />
            <Switch>
                <Route exact path="/" render={Inicio} />
                        <Route exact path="/crear" render={() => {
                            return (<Formulario crearPost={this.crearPost} />)
                        }} />
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
