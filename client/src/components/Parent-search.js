import React, {Component} from 'react';
import Search from './search/search';
import Axios from 'axios';

class ParentSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: [],
            query: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
        this.setState = {
            query: e.target.value
        }
    }

    handleClick = () => {
        Axios.get('http://127.0.0.1:8000/posts', {
            params: {
                q: this.state.query
            }
        })
          .then((response) =>{
            this.setState({result: response.data})
          })
          .catch((err) =>{
            console.log(err)
          });
      }

    render(){
        return(
            <div>
                <Search handleChange={this.handleChange} handleClick={this.handleClick} />
            </div>
        );
    }
}

export default ParentSearch;
