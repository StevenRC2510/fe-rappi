import React, { PureComponent } from 'react';
import {
  withStyles,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';

import { styles } from './styles';

interface InputProps {
  name: any;
  value: any;
  onChange: () => void;
}
interface Props {
  inputProps: InputProps;
  classes: any;
  label: string;
  value: any;
}
interface State {}

class RadioButton extends PureComponent<Props, State> {
  render() {
    const { label, inputProps } = this.props;
    return (
      <FormGroup row>
        <RadioGroup {...inputProps}>
          <FormControlLabel control={<Radio />} label={label} />
        </RadioGroup>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(RadioButton);
