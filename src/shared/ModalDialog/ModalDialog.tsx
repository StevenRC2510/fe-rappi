import React, { PureComponent, Fragment } from 'react';
import {
  Dialog,
  DialogContent,
  withStyles,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { styles } from './styles';

interface Props {
  handleClose: () => void;
  open: boolean;
  classes: any;
  children: any;
  title: string;
}
interface State {}

class ModalDialog extends PureComponent<Props, State> {
  Transition = (props: any) => {
    return <Slide direction="up" {...props} />;
  };

  render() {
    const { classes, handleClose, open, children, title } = this.props;
    return (
      <Fragment>
        <Dialog
          fullScreen
          TransitionComponent={this.Transition}
          open={open}
          onClose={handleClose}
        >
          <AppBar className={classes.appBarModal}>
            <Toolbar className={classes.toolBarModal}>
              <IconButton
                color="inherit"
                onClick={handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography className={classes.titleModal}>{title}</Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>{...children}</DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(ModalDialog);
