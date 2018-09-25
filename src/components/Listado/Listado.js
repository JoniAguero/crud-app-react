import React, { Component } from 'react'
import { Post } from '../Post/Post';

export class Listado extends Component {

    mostrarPosts = () => {
        const posts = this.props.posts;

        if(posts.length === 0) return null;

        return (
            <React.Fragment>
                {Object.keys(posts).map(post => (
                    <Post key={post} info={this.props.posts[post]}/>
                ))}
            </React.Fragment>
        )
    }

    render() {
        return (
        <table className="table top">
            <thead>
                <tr className="text-center">
                    <th scope="col">ID</th>
                    <th scope="col">Título</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {this.mostrarPosts()}
            </tbody>
        </table>
        )
    }
}

export default Listado;
