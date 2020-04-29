import React from 'react';
import ReactDOM from 'react-dom';
import '../css/item-status-filter.css'


export default class ItemStatusFilter extends React.Component {

    buttons = [
        {name: 'All'},
        {name: 'Active'},
        {name: 'Done'}
    ]

    render() {
        const buttons = this.buttons.map((el) => {
            let classNameLabel = "btn btn-secondary btn-filter "
            if (this.props.filter === el.name) {
                classNameLabel += " active";
            }
            return (
                <label className={classNameLabel} key={el.name} onClick={() => {this.props.onFilter(el.name)}}> {el.name}
                    <input type="radio"/>
                </label>
            )
        })

        return (
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                {buttons}
            </div>
        )
    }
}
