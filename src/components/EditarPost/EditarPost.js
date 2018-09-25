import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class EditarPost extends Component {

    tituloRef = new React.createRef();
    contenidoRef = new React.createRef();

    editarPost = (e) => {
        e.preventDefault();
        const post = {
            title: this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            id: this.props.post.id,
            userId: 1
        }
        this.props.editarPost(post);
    }

    cargarFormulario = () => {

        if(!this.props.post) return null;

        const { id, title, body } = this.props.post;

        return (
            <form className="col-12" onSubmit={this.editarPost}>
                <legend className="text-center">Editar Post: {id}</legend>
                <div className="form-group">
                    <label>Título del Post:</label>
                    <input type="text" ref={this.tituloRef} className="form-control" defaultValue={title} />
                </div>
                <div className="form-group">
                    <label>Contenido del Post:</label>
                    <textarea type="textarea" ref={this.contenidoRef} className="form-control" defaultValue={body} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Guardar</button>
                    <Link to={'/posts'} className="btn btn-danger">Atras</Link>
                </div>
            </form>
        )

    }

    render() {
        return (
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
        );
    }
}

export default EditarPost;
