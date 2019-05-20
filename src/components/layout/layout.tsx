import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
// Material UI
import { withStyles, IconButton, CircularProgress, Toolbar, AppBar } from '@material-ui/core';

import AppRouter from '../../routes';
import { styles } from './styles';
import { Menu } from '../menu';
import { ToggleDrawer } from '../../store/sidenav/actions';

import { Menu as MenuIcon, Face } from '@material-ui/icons';
import logo from '../../assets/images/rappiLogo.png';
import productsDB from '../../services/products.json';
import categorieDB from '../../services/categories.json';

import { Categorie } from '../../interfaces/models/categorie';
import { Product } from '../../interfaces/models/product';

import { addCategorie, addProduct } from '../../store/home/actions';

interface Props {
  classes: any,
  dispatch: any,
  toolbarOpened: any;
  open: boolean;
  categorie: Categorie[];
  product: Product[];
}

class Layout extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      avatar: 'images/empty-states/avatar.png',
      mobileOpen: false,
      translations: {},
      lang: 'en',
    };
  }

  componentDidMount= () => {
    const { categorie, dispatch, product } = this.props;

    if(categorie.length === 0){
      dispatch(addCategorie(categorieDB.categories))
    }
    if(product.length === 0){
      dispatch(addProduct(productsDB.products))
    }
    
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, dispatch, toolbarOpened, open } = this.props;
    const { avatar } = this.state;
    const thereAreTranslations = true;
    const isAuthenticated = true;

    return (
      <Router>
        {!thereAreTranslations && (
          <div className={classes.cntLoader}>
            <CircularProgress
              thickness={4}
              size={50}
              className={classes.mainLoader}
              color="primary"
            />
          </div>
        )}
        {thereAreTranslations && (
          <div className={classes.root}>
            {isAuthenticated && toolbarOpened && (
              <>
                <AppBar
                  position="fixed"
                  color="default"
                  className={classes.appBar}
                  elevation={0}
                >
                  <Toolbar
                    className={open ? classes.toolbar : classes.toolbarFake2}
                  >
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={() => dispatch(ToggleDrawer())}
                      className={classes.menuButton}
                    >
                      <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                    <Link to="/home">
                     {/* <Face className={classes.avatar} /> */} 
                      <img src={logo} className={classes.logo} />
                    </Link>
                  </Toolbar>
                </AppBar>
                <Menu />
              </>
            )}
            <main className={classes.content}>
              {isAuthenticated && toolbarOpened && (
                <div className={classes.toolbarFake} />
              )}
              <AppRouter />
            </main>
          </div>
        )}
      </Router>
    );
  }
}

const mapStateToProps = ({ sidenav, home }: any) => ({
  open: sidenav.open,
  toolbarOpened: sidenav.toolbarOpened,
  categorie: home.categorie,
  product: home.product
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(Layout);
