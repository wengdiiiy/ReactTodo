import React from 'react';
import InputField from '../modules/InputField';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    _addItem(e){
        this.props.addItem(e);
    }

    _onChange(e){
        this.props.onChange(e);
    }

    render(){
        return (
            <header className="header">
                <h1>{ this.props.title }</h1>
                <InputField addItem={this._addItem.bind(this)} onChange={this._onChange.bind(this)}/>
            </header>
        );
    }
}

export default Header;