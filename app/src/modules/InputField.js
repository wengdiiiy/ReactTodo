import React from 'react';

class InputField extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: ""
        };
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    _update(){
        this.props.onInsert(this.state.text);
        this.setState({
            text: ""
        });
    }

    render(){
        return (
            <div>
                <input type="text" name="text" id="newitem" placeholder="할일 입력" onChange={this.handleChange.bind(this)}/>
                <button onClick={this._update.bind(this)}>할일추가</button>
            </div>
        );
    }
}

export default InputField;