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
    api.fetchUser('59cebd22498d5e615b3f768c')
      .then((user) => {
        this.setState({ user });
      });

    api.fetchAnimal('59cebd22498d5e615b3f7689')
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
