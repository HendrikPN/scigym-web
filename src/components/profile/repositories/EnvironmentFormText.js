import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '100%',
  },
  child: {
    width: 'auto',
    margin: theme.spacing.unit * 2,
  },
  textField: {
    width: '100%',
  },
});

const EnvironmentFormText = ({ classes, name, description, repository, handleChange }) => {
  return (
    <div className={classes.root}>
      <div className={classes.child}>
        <TextField
          id="filled-name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={handleChange('name')}
          margin="normal"
          variant="filled"
        />
      </div>
      <div className={classes.child}>
        <TextField
          id="filled-full-description"
          label="Description"
          className={classes.textField}
          value={Boolean(description) ? description : ''}
          onChange={handleChange('description')}
          multiline
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.child}>
        <TextField
          disabled
          id="filled-disabled-owner"
          label="Owner"
          className={classes.textField}
          defaultValue={repository.owner.username}
          margin="normal"
          variant="filled"
        />
      </div>
    </div>
  );
};

EnvironmentFormText.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repository: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(EnvironmentFormText);