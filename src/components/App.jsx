import React from 'react';
import Nav from '../components/Nav';
import Content from '../components/content/Content';
import Footer from '../components/Footer';
import menus from '../../menus';
import EditInline from '../components/EditInline';
import * as api from '../api';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      owner: {},
      animal: {}
    };
  }

  componentDidMount () {
    api.fetchPerson(1)
      .then(resp => (
        this.setState({ owner: resp })
      ));

    api.fetchAnimal(2)
      .then(resp => (
        this.setState({ animal: resp })
      ));
  }

  render () {
    return (
      <div className="container">
        <EditInline initialValue="Hello World" />
      </div>
    );
  }
}

export default App;
