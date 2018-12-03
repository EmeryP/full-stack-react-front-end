import React, { Component } from 'react';
import './App.css';
import superagent from 'superagent';
import Page from './components/page/page.js'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      API_URL: 'https://full-stack-react-server.herokuapp.com/content',
      content: []
    }
  }

  componentDidMount(){
    superagent('get', this.state.API_URL)
      .then(results => {
        this.setState({
        content: results.body,
        })
        console.log(this.state.content[0].records)
      })
      .catch(console.error);
  }
    
  render() {
    return (
      <React.Fragment>
        <Page content={this.state.content} />
      </React.Fragment>
    );
  }
}

export default App;
