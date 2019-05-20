import React, { Component, Fragment, Dispatch } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { Product } from '../../interfaces/models/product';
import { Typography, Grid, IconButton, TextField } from '@material-ui/core';
import { CardProduct } from '../../shared/CardProduct';
import { ShoppingCart as ShoppingPage } from '../../pages/shoppingCart';
import { SearchBox } from '../../shared/SearchBox';
import { ModalDialog } from '../../shared/ModalDialog';
import { ShoppingCart } from '@material-ui/icons';
import { RadioButton } from '../../shared/RadioButton';
import { Action } from '../../interfaces/models/action';
import { addCart } from '../../store/home/actions';
// import { SimpleSelect } from '../../shared/SimpleSelect/SimpleSelect';
import { styles } from './styles';

interface Props {
  classes: any;
  dispatch: Dispatch<Action>;
  product: any;
  location: any;
}
interface State {
  products: any;
  search: string;
  openModal: boolean;
  sublevelId: any;
  actualityPath: string;
  available: any;
  since_quantity: any; //cantidad inicial
  until_quantity: any; //cantidad final
  since_price: any; //cantidad inicial
  until_price: any; //cantidad final
}

enum handleName {
  since_quantity = 'since_quantity',
  until_quantity = 'until_quantity',
  since_price = 'since_price',
  until_price = 'until_price',
}

const RadiosProps = [
  {
    label: 'Disponible',
    value: '1',
  },
  {
    label: 'No Disponible',
    value: '2',
  },
  {
    label: 'Ninguno',
    value: '',
  },
];

class Home extends Component<Props, State> {
  state = {
    search: '',
    actualityPath: '',
    openModal: false,
    sublevelId: null,
    products: [],
    available: 'none',
    since_quantity: '',
    until_quantity: '',
    since_price: '',
    until_price: '',
  };

  componentDidMount = () => {
    const pathname = window.location.pathname;
    const sublevelIdTemp = this.location();
    const filterArray = this.newArray(sublevelIdTemp, this.props.product);
    this.transformData(filterArray, '');
    this.setState(
      {
        actualityPath: pathname,
        sublevelId: sublevelIdTemp ? sublevelIdTemp : null,
      },
      () => this.filters(),
    );
  };

  componentWillReceiveProps = (prev: any) => {
    const { sublevelId } = this.state;
    const sublevelIdTemp = this.location();
    if (this.state.products !== prev.product) {
      const filterArray = this.newArray(sublevelIdTemp, prev.product);
      this.transformData(filterArray, '');
    }
    if (sublevelIdTemp !== sublevelId) {
      this.setState({ sublevelId: sublevelIdTemp });
      const filterArray = this.newArray(sublevelIdTemp, prev.product);
      this.transformData(filterArray, '');
    }
  };

  filterByName = (value: string | null) => {
    const search = value || '';
    this.setState({ search }, () => this.filters());
  };

  filters = () => {
    const {
      available,
      since_quantity,
      until_quantity,
      since_price,
      until_price,
      search,
    } = this.state;
    const search_local = search || '';
    let filterArray = this.newArray(this.state.sublevelId, this.props.product);
    if (available === '1') {
      filterArray = filterArray.filter((item: any) => item.available);
    }
    if (available === '2') {
      filterArray = filterArray.filter((item: any) => !item.available);
    }

    if (since_quantity !== '' && parseInt(since_quantity, 10) > 0) {
      filterArray = filterArray.filter(
        (item: any) => item.quantity >= parseInt(since_quantity, 10),
      );
    }
    if (until_quantity !== '' && parseInt(until_quantity, 10) > 0) {
      filterArray = filterArray.filter(
        (item: any) => item.quantity <= parseInt(until_quantity, 10),
      );
    }

    // filtro por precio

    const since_price_local = since_price.split(',').join('');
    const until_price_local = until_price.split(',').join('');

    if (since_price_local !== '' && parseInt(since_price_local, 10) > 0) {
      filterArray = filterArray.filter((item: any) => {
        const item_price_local = item.price
          .slice(1)
          .split(',')
          .join('');
        return item_price_local >= parseInt(since_price_local, 10);
      });
    }
    if (until_price_local !== '' && parseInt(until_price_local, 10) > 0) {
      filterArray = filterArray.filter((item: any) => {
        const item_price_local = item.price
          .slice(1)
          .split(',')
          .join('');
        return item_price_local <= parseInt(until_price_local, 10);
      });
    }

    this.transformData(filterArray, search_local);
  };

  handleChange = (name: handleName) => (event: any) => {
    const temp: handleName = name;
    this.setState(
      {
        [temp]: event.target.value,
      } as Pick<State, keyof State>,
      () => this.filters(),
    );
  };

  openDialog = (openModal: boolean) => {
    this.setState({ openModal });
  };

  location = () => {
    const newPath = window.location.pathname;
    const newSegment = newPath.split('/')[2];
    const sublevelIdTemp = +newSegment ? +newSegment : null;
    return sublevelIdTemp;
  };

  newArray = (sublevel: any, products: any) => {
    return sublevel
      ? products.filter((product: Product) => sublevel === product.sublevel_id)
      : products;
  };

  addProductCart = (product: Product) => {
    const { dispatch } = this.props;
    dispatch(addCart(product));
  };

  transformData = (product: any = null, search?: string) => {
    const uri = product ? product : this.props.product;
    let productsFiltered = uri.slice();
    if (search) {
      productsFiltered = uri.filter(
        (productItem: any) =>
          (productItem.name &&
            productItem.name.toLowerCase().includes(search.toLowerCase())) ||
          (productItem.price &&
            productItem.price.toLowerCase().includes(search.toLowerCase())),
      );
    }
    const productsTransformed = productsFiltered.map((product: any) => ({
      ...product,
    }));
    this.setState({ products: [...productsTransformed] });
  };

  render() {
    const { classes } = this.props;
    const { openModal, sublevelId, products } = this.state;

    return (
      <Fragment>
        <Grid container>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            className="padding-0"
          >
            <Grid item xs={12} md={10}>
              <SearchBox handleChange={this.filterByName} />
            </Grid>
            <Grid item xs={12} md={2}>
              <IconButton onClick={() => this.openDialog(true)}>
                <ShoppingCart className={classes.shoppingIcon} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container className={classes.ctnFilter}>
            <Typography className={classes.Title} variant="h6">
              Filtrar productos
            </Typography>
            <Grid
              container
              direction="row"
              justify="space-between"
              className={'padding-0'}
            >
              <Grid
                container
                className="padding-0"
                direction="column"
                item
                xs={12}
                md={3}
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} md={8} className={classes.ctnTextFields}>
                  <RadioButton
                    radios={RadiosProps}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'available',
                      value: this.state.available,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                className="padding-0"
                direction="column"
                item
                xs={12}
                md={4}
                justify="center"
                alignItems="center"
              >
                <Typography>Rango por Precio</Typography>
                <Grid item xs={12} md={8} className={classes.ctnTextFields}>
                  <TextField
                    label="Precio Inicial"
                    placeholder="15,000"
                    value={this.state.since_price}
                    onChange={this.handleChange(handleName.since_price)}
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Precio Final"
                    placeholder="150,000"
                    value={this.state.until_price}
                    onChange={this.handleChange(handleName.until_price)}
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                  {/* <SimpleSelect NAMEoptionValues={optionValues} label="Ordenar Por" /> */}
                </Grid>
              </Grid>
              <Grid
                container
                className="padding-0"
                direction="column"
                item
                xs={12}
                md={5}
                justify="center"
                alignItems="center"
              >
                <Typography>Rango por Cantidad</Typography>
                <Grid item xs={12} md={8} className={classes.ctnTextFields}>
                  <TextField
                    label="Cantidad Inicial"
                    placeholder="20"
                    value={this.state.since_quantity}
                    onChange={this.handleChange(handleName.since_quantity)}
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Cantidad Final"
                    placeholder="800"
                    value={this.state.until_quantity}
                    onChange={this.handleChange(handleName.until_quantity)}
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                  {/* <SimpleSelect NAMEoptionValues={optionValues} label="Ordenar Por" /> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={classes.ctnTitleProducts}>
            <Typography className={classes.Title} variant="h4">
              {' '}
              Productos{' '}
            </Typography>
          </Grid>
          {sublevelId &&
            products.map((product: Product) => {
              return (
                <Grid item xs={12} md={4} key={product.id}>
                  <CardProduct
                    onClick={this.addProductCart}
                    product={product}
                    sublevel_id={product.sublevel_id}
                    name={product.name}
                    available={product.available}
                    quantity={product.quantity}
                    price={product.price}
                  />
                </Grid>
              );
            })}
          {!sublevelId &&
            products.map((product: Product) => (
              <Grid item xs={12} md={4} key={product.id}>
                <CardProduct
                  onClick={this.addProductCart}
                  product={product}
                  sublevel_id={product.sublevel_id}
                  name={product.name}
                  available={product.available}
                  quantity={product.quantity}
                  price={product.price}
                />
              </Grid>
            ))}
        </Grid>
        <ModalDialog
          title={'Productos agregados'}
          open={openModal}
          handleClose={() => this.openDialog(false)}
        >
          <ShoppingPage />
        </ModalDialog>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ home }: any) => {
  return {
    product: home.product,
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Home));
