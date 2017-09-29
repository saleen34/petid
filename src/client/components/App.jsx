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
    api.fetchAnimals()
      .then(resp => (
        this.setState({ owner: resp })
      ));

    // api.fetchAnimal(2)
    //   .then(resp => (
    //     this.setState({ animal: resp })
    //   ));
  }

  render () {
    return (
      <div className="container">
        <Nav menus={menus} />
        <Content user={this.state.owner} animal={this.state.animal} />
        <Footer />
      </div>
    );
  }
}

export default App;
