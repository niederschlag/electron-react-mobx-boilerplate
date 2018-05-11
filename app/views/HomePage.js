import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="">
        This is the home page...
        <br/>
        <Link to='/todo'>Todo</Link>
      </div>
    );
  }
}

HomePage.propTypes = {};
export default HomePage;
