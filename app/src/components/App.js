import React from 'react';
import Header from './Header';
import Content from './Content';
// import reactfire from 'reactfire';


var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: "AIzaSyDzd8E32OiBgZnfb8Dc1FpdiAHtg51qeB4",
    authDomain: "react-9beaf.firebaseapp.com",
    databaseURL: "https://react-9beaf.firebaseio.com",
    storageBucket: "react-9beaf.appspot.com",
    "rules": {
        ".read": "true",
        ".write": "true"
    }
};
var wendyApp = firebase.initializeApp(config);


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items: [],
            text: ''
        };
        // this.mixins = [ReactFireMixin]; --> ReactFire사용시에만 추가
    }

    componentWillMount(){
        this.ref = wendyApp.database().ref('react/todo');

        //데이터가 변경될떄 실행
        this.ref.on('value', function(dataSnapshot) {
            var items = [];
            dataSnapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                items.push(item);
            }.bind(this));

            this.setState({
                items: items
            });
        }.bind(this));
    }

    componentWillUnmount(){
        ref.off();
    }


    getItems(){
        return this.state.items;
    }

    _addItem(e){
        if (this.state.text && this.state.text.trim().length !== 0) {
            this.ref.push({
                text: this.state.text
            });
            this.setState({
                text: ''
            });
        }
    }

    _removeItem(key){
        this.ref.child(key).remove();
    }

    _onChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render(){
        return  (
            <div>
                <Header title={ this.props.headerTitle } addItem={this._addItem.bind(this)} onChange={this._onChange.bind(this)}/>
                <Content items={ this.state.items } title={ this.props.contentTitle }
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

export default App;