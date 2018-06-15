import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { setActiveTab } from '../actions/navigationActions';
import { Menu } from 'semantic-ui-react';

class Navigation extends Component {

  // handleClick = (e) => {
  //   this.props.dispatch(setActiveTab(e.key))
  // }

  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item name="home">ABH Recruiting</Menu.Item>
      </Menu>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     current: state.activeTab.current
//   };
// }

export default Navigation;
