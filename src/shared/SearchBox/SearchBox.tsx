import React, { PureComponent } from 'react';
import { Grid } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import './styles.scss';

interface Props {
  placeholder?: string;
  handleChange: (value: string | null) => void;
}

interface State {
  search: string;
}

export default class SearchBox extends PureComponent<Props, State> {
  state = {
    search: '',
  };

  render() {
    const { handleChange } = this.props;
    const { search } = this.state;

    return (
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className={'ctn-search'}>
          <Search className="search-icon" />
          <input
            type={'text'}
            className="search-input"
            placeholder={'Buscar Productos'}
            value={search}
            onChange={({ target }: any) => {
              handleChange(target.value);
              this.setState({ search: target.value });
            }}
          />
          {search && (
            <span
              onClick={() => {
                handleChange('');
                this.setState({ search: '' });
              }}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}
