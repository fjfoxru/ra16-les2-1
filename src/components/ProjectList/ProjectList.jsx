import React, { Component } from 'react';


export default class ProjectList extends Component {
    render() {
        return (
            <div className="activeProjects" >
              {this.props.activeProjects.map(project => <img key={project.id} src={project.img} alt=""/>)}
            </div>
        );
    }
} 