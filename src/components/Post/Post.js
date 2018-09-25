import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import swal from 'sweetalert2';

export class Post extends Component {

  confirmarEliminacion = () => {

    const { id } = this.props.info;

    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.props.eliminarPost(id)
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    }) 
  }

  render() {

    const {id, title} = this.props.info;

    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>
            <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
            <button to={`/post/${id}`} className="btn btn-success">Editar</button>
            <button to={`/post/${id}`} className="btn btn-danger" onClick={ this.confirmarEliminacion } >Eliminar</button>
        </td>
      </tr>
    )
  }
}

export default Post;
