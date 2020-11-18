import React, { Component } from 'react';


export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.activeProjects = props.activeProjects;
    }

    render() {
        return (
            <div className="activeProjects" >
              {this.activeProjects.map(project => <img src={project.img} alt=""/>)}
            </div>
        );
    }
} 