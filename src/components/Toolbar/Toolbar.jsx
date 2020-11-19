import React, { Component } from 'react';


export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.selected = props.selected;
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.onSelectFilter(e.target.textContent);
    }

    render() {
        return (
            <div className="filters">
              {this.props.filters.map(filter => <button className={this.props.selected === filter ? 'active' : 'notActive'} key={filter} onClick={this.handleClick}>{filter}</button>)}
            </div>
        );
    }
}