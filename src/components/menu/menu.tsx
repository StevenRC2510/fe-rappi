import React, { PureComponent, Fragment } from 'react';
import { NavLink, matchPath, withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import * as ant from 'antd';

ant.Menu;

import { styles } from './styles';
import {
  Hidden,
  Drawer,
  Typography,
  ListItemIcon,
  Grid,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { ToggleDrawer } from '../../store/sidenav/actions';
import { mainMenu } from './constants';
import { ChevronRight, Face } from '@material-ui/icons';

import { CollapseGN } from '../collapse';

const match = (route: string) => matchPath(window.location.pathname, route);
class Menu extends PureComponent<any, any> {
  state = { avatar: '/images/empty-states/avatar.png' };

  renderMenuItems = (items: any[], level: number = 0) =>
    items.map((item: any, i: number) => {
      const { classes } = this.props;
      return item && item.sublevels && item.sublevels.length > 0 ? (
        <Fragment key={i + level}>
          <CollapseGN item={item} index={i} level={level}>
            {this.renderMenuItems(item.sublevels, level + 16)}
          </CollapseGN>
          <Divider className={classes.separator} />
        </Fragment>
      ) : (
        <Fragment>
          <NavLink
            to={`/home/${item.id}`}
            key={`mainMenu_${i}`}
            className={classes.menuItem}
            activeClassName={classes.activeOption}
            exact
          >
            <Typography
              style={{ paddingLeft: level + 8 }}
              className={classes.textSubmenuLevels}
            >
              {item.name}
            </Typography>
          </NavLink>
          <Divider className={classes.separator} />
        </Fragment>
      );
    });

  render() {
    const { classes, dispatch, theme, open, categories } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <Grid container justify="center" className={classes.containerAvatar}>
            <Face className={classes.avatar} />
          </Grid>
          <List>
            <NavLink
              to="/"
              className={classes.menuItem}
              activeClassName={classes.activeOption}
              exact
            >
              <ListItem
                button
                className={classes.cntItemOption}
                key={`userMenu`}
              >
                <ListItemText
                  primary={
                    <Typography className={classes.menuItemLabel}>
                      Steven Ruiz
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant={'h6'}
                      className={classes.menuItemLabelSecondary}
                      noWrap
                    >
                      stevenRuiz@gmail.com
                    </Typography>
                  }
                />
              </ListItem>
            </NavLink>
          </List>
        </div>
        <Divider className={classes.separator} />
        {/* Main Menu */}
        <List>
          {mainMenu.map((item, index) => (
            <NavLink
              to={`/${item.label}`}
              className={classes.menuItem}
              key={`mainMenu_${index}`}
              activeClassName={classes.activeOption}
              exact
            >
              <ListItem button className={classes.cntItemOption}>
                <ListItemText
                  primary={
                    <Typography className={classes.menuItemLabel}>
                      {item.label}
                    </Typography>
                  }
                />
                <ListItemIcon
                  className={`${classes.cntMenuIcon} ${
                    match(`/${item.label}`) ? classes.cntMenuIconActive : ''
                  }`}
                >
                  <ChevronRight />
                </ListItemIcon>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider className={classes.separator} />
        {this.renderMenuItems(categories)}
      </div>
    );

    return (
      <nav className={open ? classes.drawer : ''}>
        <Hidden smUp>
          <Drawer
            container={this.props.container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClose={() => dispatch(ToggleDrawer())}
            classes={{ paper: classes.drawerPaper }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            onClose={() => dispatch(ToggleDrawer())}
            classes={{ paper: classes.drawerPaper }}
            variant="persistent"
            open={open}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

const mapStateToProps = ({ sidenav, home }: any) => ({
  categories: home.categorie,
  open: sidenav.open,
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps),
)(withRouter(Menu));
