import React, { Component } from 'react'
import { Listado } from '../Listado/Listado';

export class Posts extends Component {
  render() {
    return (
      <div className="col-12">
        <h2 className="text-center"> Posts </h2>
        <Listado posts={this.props.posts}/>
      </div>
    )
  }
}

export default Posts;
