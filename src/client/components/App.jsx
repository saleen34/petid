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
      user: {},
      animal: {}
    };
  }

  componentDidMount () {
    api.fetchUser('59dd2d476197ef37ad4428f0')
      .then((user) => {
        this.setState({ user });
      });

    api.fetchAnimal('59df90cbb53e0b26b4f5abf6')
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
