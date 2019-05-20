import React, { Component, Fragment, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, withStyles, Typography } from '@material-ui/core';

import { Action } from '../../interfaces/models/action';
import { Product } from '../../interfaces/models/Product';
import {
  clearCart,
  clearCartSuccess,
  removeProduct,
  updateCart,
} from '../../store/home/actions';

import { styles } from './styles';

import { CardCart } from '../../shared/CardCart';

interface Props {
  classes: any;
  shopping_cart: any;

  dispatch: Dispatch<Action>;
}
interface State {}

class ShoppingCart extends Component<Props, State> {
  state = {};

  removeAllCart = () => {
    const { dispatch } = this.props;
    dispatch(clearCart());
    setTimeout(() => dispatch(clearCartSuccess()), 2000);
  };

  removeOneProduct = (product: Product) => {
    const { shopping_cart, dispatch } = this.props;
    const id_delete = shopping_cart.indexOf(product);

    dispatch(removeProduct(id_delete));
  };

  updateProduct = (prev_product: Product, product: Product) => {
    const { shopping_cart, dispatch } = this.props;
    const id_delete = shopping_cart.indexOf(prev_product);

    dispatch(updateCart(id_delete, product));
  };

  render() {
    const { classes, shopping_cart } = this.props;
    return (
      <Fragment>
        <Grid container>
          {shopping_cart && shopping_cart.length > 0 ? (
            shopping_cart.map((item_product: Product, index: number) => {
              return (
                <CardCart
                  update={this.updateProduct}
                  key={index}
                  product={item_product}
                  removeOneProduct={this.removeOneProduct}
                />
              );
            })
          ) : (
            <Typography variant="h3" gutterBottom>
              No hay productos{' '}
            </Typography>
          )}
          <Grid container spacing={16} direction="row" justify="center">
            <Grid item xs={12} md={3}>
              <Button variant="contained" color="primary" fullWidth>
                Comprar Productos
              </Button>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.removeAllCart}
                className={classes.buttonDelete}
                fullWidth
              >
                Eliminar Productos
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ home }: any) => ({
  shopping_cart: home.add_cart,
});

export default withStyles(styles)(connect(mapStateToProps)(ShoppingCart));
