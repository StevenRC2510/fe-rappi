import React, { PureComponent } from 'react';
import {
  withStyles,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';

import { styles } from './styles';
import { RadioSharp } from '@material-ui/icons';

interface InputProps {
  name: any;
  value: any;
}
interface Props {
  inputProps: InputProps;
  radios: any[];
  classes: any;
  onChange: any;
}
interface State {}

class RadioButton extends PureComponent<Props, State> {
  render() {
    const { inputProps, radios, onChange } = this.props;

    return (
      <FormGroup row>
        <RadioGroup {...inputProps} onChange={onChange('available')}>
          {radios &&
            radios.length > 0 &&
            radios.map((radioItem: any) => (
              <FormControlLabel
                value={radioItem.value}
                control={<Radio />}
                label={radioItem.label}
              />
            ))}
        </RadioGroup>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(RadioButton);
