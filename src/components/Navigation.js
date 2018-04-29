import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveTab } from '../actions/navigationActions';
import { Menu, Icon } from 'antd';

class Navigation extends Component {

  handleClick = (e) => {
    this.props.dispatch(setActiveTab(e.key))
    console.log(this.props.dispatch(setActiveTab(e.key)))
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.props.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <Menu.Item key="setting">
          <Icon type="setting" />Navigation Three
        </Menu.Item>
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    current: state.current
  };
}

export default connect(mapStateToProps)(Navigation);
