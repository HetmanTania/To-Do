import React from "react";

import "../css/add-item.css"

export default class AddItem extends React.Component {

    state = {
        lable: ""
    }

    onLableChange = (event) => {

        this.setState({
            lable: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.lable)
        this.setState({
            label: ''
        });
    }


    render() {

        return (
            <div className="input-group mb-3 add-item">
                <form className="form-add-item" onSubmit={this.onSubmit}>
                    <input onChange={this.onLableChange} value={this.state.label}
                           type="text" className="form-control input-add-item" placeholder="Your task"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary dtn-add-item" type="submit">Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}