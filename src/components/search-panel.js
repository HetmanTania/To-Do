import React from 'react';
import ReactDOM from 'react-dom';

import '../css/search-panel.css';


export default class SearchPanel extends React.Component {


    onChangeSearch = (event) => {
        this.props.onSearh(event.target.value);
    }


    render() {
        return (
            <div className="input-group mb-3">
                <form className="form-search" onSubmit={this.onSubmit}>
                    <input type="text" className="form-control" placeholder="Find..." onChange={this.onChangeSearch}/>
                </form>
            </div>)
    }
}


