import React, { PureComponent, Fragment } from 'react';
import {
  Grid,
  Button,
  withStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  IconButton,
} from '@material-ui/core';
import productos from '../../assets/images/productos.png';
import { Product } from '../../interfaces/models/product';
import { styles } from './styles';
import {
  RemoveShoppingCart,
  AddCircle,
  RemoveCircle,
} from '@material-ui/icons';

interface Props {
  classes: any;
  removeOneProduct: (product: Product) => void;
  update: (prev_product: Product, product: Product) => void;
  product: any;

  quantityCart?: any;
  // onClick: (product: Product) => void;
}

interface State {
  quantityCart: number;
}

class CardCart extends PureComponent<Props, State> {
  state = {
    quantityCart: 1,
  };

  componentDidMount = () => {
    const { product } = this.props;
    if (product && product.quantityCart) {
      this.setState({ quantityCart: product.quantityCart });
    }
  };

  onAdd = () => {
    const { product, update } = this.props;
    const { quantityCart } = this.state;
    const cant =
      quantityCart + 1 > product.quantity ? product.quantity : quantityCart + 1;
    const newProduct = { ...product, quantityCart: cant };
    this.setState({
      quantityCart: cant,
    });

    return update(product, newProduct);
  };

  onSub = () => {
    const { product, update } = this.props;
    const { quantityCart } = this.state;
    const cant = quantityCart - 1 < 1 ? 1 : quantityCart - 1;
    const newProduct = { ...product, quantityCart: cant };
    this.setState({
      quantityCart: cant,
    });
    return update(product, newProduct);
  };

  render() {
    const {
      classes,
      product,
      removeOneProduct,
    } = this.props;

    const { quantityCart } = this.state;

    return (
      <Fragment>
        <List className={classes.containerList}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Productos" src={productos} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  component="span"
                  className={classes.textInfo}
                >
                  Nombre:{' '}
                  <span className={classes.subTextInfo}> {product.name} </span>
                </Typography>
              }
              secondary={
                <Fragment>
                  <Typography component="span" className={classes.textInfo}>
                    Precio:{' '}
                    <span className={classes.subTextInfo}>
                      {' '}
                      {product.price}{' '}
                    </span>
                  </Typography>
                  <Typography
                    component="span"
                    className={classes.textInfo}
                    color="textPrimary"
                  >
                    Categoria:
                    <span className={classes.subTextInfo}>
                      {' '}
                      {product.sublevel_id}{' '}
                    </span>
                  </Typography>
                  <Grid container direction="row" className={'padding-0'}>
                    <RemoveCircle
                      className={classes.buttonRemove}
                      onClick={this.onSub}
                    />
                    <Typography>{quantityCart}</Typography>
                    <AddCircle
                      className={classes.buttonAdd}
                      onClick={this.onAdd}
                    />
                  </Grid>
                </Fragment>
              }
            />
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => removeOneProduct(product)}
              className={classes.buttonRemoveItem}
            >
              <RemoveShoppingCart />
            </IconButton>
          </ListItem>
          <Divider className={classes.divider} />
        </List>
      </Fragment>
    );
  }
}
export default withStyles(styles)(CardCart);
