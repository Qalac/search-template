import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import './search.css'


class Search extends Component {

    render(){
        return(
            <div className="text-center">
                <input type="text" placeholder="" onChange={this.props.handleChange} /><br />
                <Button variant="outline-success" onClick={this.props.handleClick} href='/search' >Search</Button>
            </div>
        );
    }
}

// 

export default Search;
