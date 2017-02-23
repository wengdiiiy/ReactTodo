import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import RandomNumber from '../modules/RandomNumber';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return  (
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }
                         body={ this.props.contentBody }/>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'TODO',
    contentTitle: '리스트',
    contentBody: '아직개발전'
};


ReactDOM.render(<App/>, document.getElementById('app'));