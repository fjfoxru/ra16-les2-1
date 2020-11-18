import React, { Component } from 'react';


export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.filters = props.filters;
        this.selected = props.selected;
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.onSelectFilter(e.target.textContent);
    }

    render() {
        return (
            <div className="filters">
              {this.filters.map(filter => <button onClick={this.handleClick}>{filter}</button>)}
            </div>
        );
    }
}