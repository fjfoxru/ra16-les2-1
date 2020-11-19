import React, { Component } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import ProjectList from '../components/ProjectList/ProjectList';
import shortid from 'shortid';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.products = props.products.map(product => Object.assign(product, {'id' : shortid.generate()}));
        this.filters = Array.from(new Set(props.products.map(product => product.category)));
        this.state = {
            activeProducts: this.products,
            selected: '',
        };
    }
    onSelectFilter = (filter) => {
        this.setState(state => ({
                activeProducts : state.selected === '' ? this.products : this.products.filter(product => product.category === filter),
                selected : filter,
            }));
    }
    render() {
        return (
            <>
                <Toolbar
                    filters={this.filters}
                    selected={this.state.selected}
                    onSelectFilter={this.onSelectFilter}
                />
                <ProjectList activeProjects={this.state.activeProducts}/>

            </>

        );
    }

}
