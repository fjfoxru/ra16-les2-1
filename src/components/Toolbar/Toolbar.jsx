import React, { Component } from 'react';


export default class Toolbar extends Component {

    handleClick = (e) => {
        return () => {
            this.props.onSelectFilter(e);
        }
    
    }

    render() {
        return (
            <div className="filters">
              {this.props.filters.map(filter => <button className={this.props.selected === filter ? 'active' : 'notActive'} key={filter} onClick={this.handleClick(filter)}>{filter}</button>)}
            </div>
        );
    }
}