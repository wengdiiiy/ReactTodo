import React from 'react';
import InputField from '../modules/InputField';
import update from 'react-addons-update';

var data = [{"text" : "하하"}];

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoData: data
        };
    }

    _addItem(text){
        var newState = update(this.state, {
            todoData: {
                $push: [{"text": text}]
            }
        });
        this.setState(newState);
    }

    render(){
        return (
            <section>
                <InputField onInsert={this._addItem.bind(this)}/>
                <ul id="todolist">
                    {this.state.todoData.map((todo, i) => {
                        return (<TodoItem text={todo.text}
                                          key={i}/>);
                    })}
                </ul>
            </section>
        );
    }
}

class TodoItem extends React.Component{
    render() {
        return(
            <li>{this.props.text}</li>
        );
    }
}

export default Content;