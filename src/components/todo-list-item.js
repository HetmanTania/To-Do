import React from 'react';
import ReactDOM from 'react-dom';
import "../css/todo-list-item.css"



export default class TodoListItem extends React.Component {




    render(){

        const  {lable, id,onDelete, onToggleImportant, onToggleDone, important, done} = this.props;


        let classNameLable = "todo-list-item form-control";
        let classNameSpanCompleted = "spanFas";
        let classNameSpanImpostant = "spanInportant";
        if(done){
            classNameLable += " done";
            classNameSpanCompleted += " spanComplited";
        }

        if(important){
            classNameLable += " important";
            classNameSpanImpostant += " importmant-item";
        }


        let idIsImportantCh = "isImportantCh" +  id;

        return (
            <div className="input-group main-group">
                <div className="input-group-prepend ">
                    <div className="input-group-text ">
                        <label className="isСompletedL" htmlFor={id} >
                            <input id={ id} type="checkbox" className="isСompletedC" onClick={onToggleDone}/>
                            <span className={classNameSpanCompleted} > <i className="fas fa-check"></i> </span>
                        </label>
                    </div>
                </div>
                <div className={classNameLable}>{lable}</div>
                <div className="input-group-prepend ">
                    <div className="input-group-text ">
                        <label className="isImportantL" htmlFor={idIsImportantCh}  >
                            <input id={idIsImportantCh} type="checkbox" className="isImportantC" onChange={onToggleImportant} />
                            <span className={classNameSpanImpostant}> <i className="fas fa-exclamation"></i> </span>
                        </label>
                    </div>
                </div>

                <div className="input-group-prepend ">
                    <div className="input-group-text">
                        <button className="delete-btn" onClick={onDelete}>
                        <span className="span-delete">
                             <i className="fas fa-trash-alt"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

