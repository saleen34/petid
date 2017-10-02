import React from 'react';
import Nav from '../components/Nav';
import Content from '../components/content/Content';
import Footer from '../components/Footer';
import menus from '../../../config/menus';
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
    api.fetchUsers()
      .then((user) => {
        this.setState({ user });
      });

    api.fetchAnimals()
      .then((animal) => {
        this.setState({ animal });
      });
  }

  render () {
    return (
      <div className="container">
        <Nav menus={menus} />
        <Content user={this.state.user} animal={this.state.animal} />
        <Footer />
      </div>
    );
  }
}

export default App;
