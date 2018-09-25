import React, { Component } from 'react';

export class Formulario extends Component {

    tituloRef = new React.createRef();
    contenidoRef = new React.createRef();

    crearPost = (e) => {
        e.preventDefault();
        const post = {
            title: this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            userId: 1
        }
        this.props.crearPost(post);
    }

    render() {
        return (
        <form className="col-12" onSubmit={this.crearPost}>
            <legend className="text-center">Crear nuevo Post</legend>
            <div className="form-group">
                <label>Título del Post:</label>
                <input type="text" ref={this.tituloRef} className="form-control" placeholder="Escriba un título..."/>
            </div>
            <div className="form-group">
                <label>Contenido del Post:</label>
                    <textarea type="textarea" ref={this.contenidoRef} className="form-control" placeholder="Escriba un contenido..." />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Crear</button>
            </div>
        </form>
        );
    }
}

export default Formulario;
