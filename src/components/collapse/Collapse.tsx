import React, { Component, Fragment } from 'react';
import { Collapse, Grid, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';
import { styles } from './styles';
import classNames from 'classnames';

interface Props {
  classes: any;
  padding?: any;
  item: any;
  level: number;
  index: number;
  children?: any;
}

interface State {
  open: boolean;
}
class CollapseGN extends Component<Props, State> {
  state = {
    open: false,
  };

  handleOpen = (flag: boolean) => {
    this.setState({
      open: flag,
    });
  };

  render() {
    const { classes, item, index, level } = this.props;
    return (
      <Fragment key={`row_${index}`}>
        <Grid
          container
          item
          direction="column"
          xs={12}
          className={`padding-0 ${classes.ctnDetail}`}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            style={{ cursor: 'pointer', paddingLeft: level + 8 }}
            className={classes.cntItemOption}
            onClick={() => this.handleOpen(!this.state.open)}
          >
            <Typography className={classes.menuItemLabel}>
              {item.name}
            </Typography>
            {this.state.open && (
              <ChevronLeft className={classes.cntMenuIconActive} />
            )}
            {!this.state.open && (
              <ChevronRight className={classes.cntMenuIcon} />
            )}
          </Grid>
          <Collapse
            in={this.state.open}
            timeout="auto"
            unmountOnExit
            style={{ backgroundColor: 'white' }}
          >
            {...this.props.children}
          </Collapse>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CollapseGN);
