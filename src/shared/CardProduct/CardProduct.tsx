import React, { PureComponent } from 'react';
import {
  Grid,
  withStyles,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from '@material-ui/core';
import { Product } from '../../interfaces/models/product';
import { styles } from './styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';

import Banner from '../../assets/images/banner.jpg';

interface Props {
  classes: any;
  name: any;
  available: any;
  product: any;
  sublevel_id: any;
  quantity: any;
  price: any;
  quantityCart?: any;
  onClick: (product: Product) => void;
}

interface State {
  quantityCart: number;
}

class CardProduct extends PureComponent<Props, State> {
  state = {
    quantityCart: 1,
  };

  onAdd = () => {
    const { quantity } = this.props;
    const { quantityCart } = this.state;
    const cant = quantityCart + 1 > quantity ? quantity : quantityCart + 1;
    this.setState({
      quantityCart: cant,
    });
  };

  onSub = () => {
    const { quantityCart } = this.state;
    const cant = quantityCart - 1 < 1 ? 1 : quantityCart - 1;
    this.setState({
      quantityCart: cant,
    });
  };

  render() {
    const {
      classes,
      name,
      available,
      sublevel_id,
      quantity,
      price,
      product,
      onClick,
    } = this.props;

    const { quantityCart } = this.state;

    return (
      <Grid container spacing={16} direction="row">
        <Card className={classes.card} key={sublevel_id}>
          <Grid container direction="column">
            <CardContent className={classes.content}>
              <Typography
                className={classes.titleCard}
                align="left"
                component="h5"
                variant="h5"
              >
                {name}
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                className={
                  available ? classes.availableText : classes.notAvailableText
                }
              >
                {available ? 'Disponible' : 'No disponible'}
              </Typography>
            </CardContent>
            <Grid item>
              <Typography className={classes.textCard} align="left">
                <strong> Cantidad: </strong> {quantity}
              </Typography>
              <Typography className={classes.textCard} align="left">
                <strong> Precio: </strong> $ {price}
              </Typography>
              <Grid
                container
                justify="space-around"
                direction="row"
                className={'padding-0'}
              >
                <RemoveCircle
                  className={classes.buttonRemove}
                  onClick={this.onSub}
                />
                <Typography>{quantityCart}</Typography>
                <AddCircle className={classes.buttonAdd} onClick={this.onAdd} />
              </Grid>
            </Grid>
            <Grid item className={classes.ctnButtons}>
              <Button
                onClick={() => onClick({ ...product, quantityCart })}
                variant="contained"
                color="primary"
                fullWidth
              >
                Agregar
              </Button>
            </Grid>
          </Grid>
          <CardMedia className={classes.imageBanner} image={Banner} />
        </Card>
      </Grid>
    );
  }
}
export default withStyles(styles)(CardProduct);
