import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <AppBar
        titel="he"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={
          <div>
            <IconButton
              onTouchTap={this.handleToggle}
            >
              <MoreVertIcon />
            </IconButton>
            <Drawer
              docked={false}
              width={300}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <AppBar
                showMenuIconButton={false}
              />
              <MenuItem href="/befolkningsendring" onTouchTap={this.handleClose}>Befolkningsendring</MenuItem>
              <MenuItem href="/arealdekke" onTouchTap={this.handleClose}>Areal av land og ferskvann</MenuItem>
            </Drawer>
          </div>
        }
      />
    );
  }
}

export default NavigationBar;
