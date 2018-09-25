import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Post extends Component {
  render() {

    const {id, title} = this.props.info;

    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>
            <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
            <button to={`/post/${id}`} className="btn btn-success">Editar</button>
            <button to={`/post/${id}`} className="btn btn-danger" onClick={ () => this.props.eliminarPost(id)} >Eliminar</button>
        </td>
      </tr>
    )
  }
}

export default Post;
