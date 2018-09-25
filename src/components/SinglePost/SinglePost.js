import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SinglePost extends Component {

    mostrarPost = (props) => {  

        if(!props.post) return null;

        const { body, id, title } = this.props.post;

        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{body}</p>
                            <footer className="blockquote-footer">Post nro: <cite title="Source Title">{id}</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div className="top">
                    <Link to={'/posts'} className="btn btn-danger">Atras</Link>
                </div>
            </React.Fragment>
        )

    }

    render() {

        return (
            <div className="row top">
                {this.mostrarPost(this.props)}
            </div>
            
        )
    }
}

export default SinglePost;
