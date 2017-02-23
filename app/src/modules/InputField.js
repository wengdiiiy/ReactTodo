import React from 'react';

class InputField extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: ""
        };
    }

    handleChange(e){
        this.props.onChange(e);
        // var nextState = {};
        // nextState[e.target.name] = e.target.value;
        // this.setState(nextState);
    }

    _update(){
        this.props.addItem(this.state.text);
    }

    render(){
        return (
            <div>
                <input type="text" name="text" id="newitem" className="new-todo" placeholder="What needs to be done?" onChange={this.handleChange.bind(this)}/>
                <button onClick={this._update.bind(this)}>할일추가</button>
            </div>
        );
    }
}

/* <button onClick={this._update.bind(this)}>할일추가</button> */
export default InputField;