import React from 'react';

class StateExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header Initial state",
            content: "Content Initial State"
        };
    }

    _updateHeader(text){
        this.setState({
            header: "Header has changed"
        });
    }

    /*  ES6 class에선 auto binding이 되지 않으므로, setState 메소드를 사용 하게 될 메소드를 bind 해주어야 합니다. */
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick={this._updateHeader.bind(this)}>Update</button>
            </div>
        );
    }
}

export default StateExample;