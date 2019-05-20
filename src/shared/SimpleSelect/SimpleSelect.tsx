import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { Select, MenuItem } from '@material-ui/core';

interface InputProps {
  name: string;
  value: any;
  onBlur: () => void;
  onChange: () => void;
}

interface Props {
  inputProps: InputProps;
  form?: any;
  label?: string;
  iconRight?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  optionValues: any[];
  border?: boolean;
}

export class SimpleSelect extends PureComponent<Props, any> {
  render() {
    const {
      required = false,
      disabled = false,
      label,
      inputProps,
      form,
      placeholder,
      optionValues,
      border = true,
    } = this.props;


    const wrapperInputClasses = classNames({
      disabled,
      border,
      'cnt-field': true,
    });

    return (
      <div className="cnt-field-form">
        {label && (
          <label className="label">
            {label}
          </label>
        )}
        <div className={wrapperInputClasses}>
          <Select
            value={inputProps.value}
            inputProps={{
              name: inputProps.name,
            }}
            disableUnderline={true}
            className={'input select'}
            onChange={inputProps.onChange}
            placeholder={placeholder}
          >
            {optionValues.map((item: any, index: number) => {
              const itemValue = typeof item === 'string' ? item : item.value;
              const itemLabel = typeof item === 'string' ? item : item.label;
              return (
                <MenuItem key={index} value={itemValue}>
                  {itemLabel}
                </MenuItem>
              );
            })}
          </Select>
        </div>
      </div>
    );
  }
}
