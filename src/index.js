import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import SearchPanel from './components/search-panel'
import ToDoList from './components/todo-list'
import ItemStatusFilter from "./components/item-status-filter";
import AddItem from "./components/add-item";

export default class App extends React.Component {

    idItem = 4;

    state = {
        searchString: '',
        filter: 'All',
        toDoData: [
            this.createToDoItem('Drink Coffee'),
            this.createToDoItem('Read a book'),
            this.createToDoItem('Learn React'),
        ]
    }

    createToDoItem(lable) {
        this.idItem++;
        return {
            id: this.idItem,
            lable: lable,
            important: false,
            done: false
        };

    }

    editDoneImportant(id, nameProp) {
        this.setState(({toDoData}) => {
            let index = toDoData.findIndex((el) => el.id === id);
            let oldItem = toDoData[index];
            let newItem = Object.assign(toDoData[index]);

            newItem[nameProp] = !oldItem[nameProp];

            let before = toDoData.slice(0, index);
            before.push(newItem);
            let newDate = before.concat(toDoData.slice(index + 1));

            return {
                toDoData: newDate
            }
        })
    }

    onToggleDone = (id) => {
        this.editDoneImportant(id, 'done');

    }

    onToggleImportant = (id) => {
        this.editDoneImportant(id, 'important');
    }


    deleteItem = (id) => {
        this.setState(({toDoData}) => {
            const index = toDoData.findIndex((el) => el.id == id);
            const newDate = toDoData.slice(0, index).concat(toDoData.slice(index + 1));

            return {
                toDoData: newDate
            }
        })
    };

    addItem = (text) => {
        this.setState(({toDoData}) => {
            let copyData = toDoData.slice(0, toDoData.length);
            copyData.push(this.createToDoItem(text));

            return {
                toDoData: copyData
            }
        })
    }

    setSearchString = (searchString) => {
        this.setState(() => {
            return{
                searchString: searchString
            }
        })
    }


    filter = (data) => {
        if(this.state.filter === "Active"){
            let activeEl = data.filter((el) => {
                if(el.done === false) {
                    return el;
                }
            })
            return activeEl;
        }
        if(this.state.filter === "Done"){
            let doneEl = data.filter((el) => {
                if(el.done === true) {
                    return el;
                }
            })
            return doneEl;
        }
        if(this.state.filter === "All"){
           return  data;
        }
    }

    searchItem = () => {
        if (this.state.searchString.length === 0) {
          return this.state.toDoData
        }
        else {
            let foundEl = this.state.toDoData.filter((el) => {
                    if (el.lable.toLocaleLowerCase().startsWith(this.state.searchString.toLocaleLowerCase())) {
                        return el;
                    }
                }
            )
            return foundEl;
        }
    }

    setFilter = (filter) => {
        this.setState(() => {
            return {
                filter: filter
            }
        })
    }

    render() {
        let foundEl = this.filter(this.searchItem());
        return (


            <div>
                <Header/>
                <div className="dox-SearchPanel-ItemStatusFilter">
                    <SearchPanel onSearh={this.setSearchString}/>
                    <ItemStatusFilter filter={this.state.filter} onFilter={this.setFilter}/>
                </div>

                <ToDoList
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    toDoList={foundEl}

                    onDelete={this.deleteItem}/>
                <AddItem onAdd={this.addItem}/>
            </div>)
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));