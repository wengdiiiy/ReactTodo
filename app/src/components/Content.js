import React from 'react';
import update from 'react-addons-update';

class Content extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var _this = this;
        var createItem = function(item, index) {
            return (
                <li key={ index }>
                    { item.text }
                </li>
            );
        };

        return <ul className="todo-list">{this.props.items.map(createItem)}</ul>;

/*        return (
            <ul className="todo-list">
                {this.state.todoData.map((todo, i) => {
                    return (<TodoItem text={todo.text}
                                      key={i}/>);
                })}
            </ul>
        );*/
    }
}


export default Content;