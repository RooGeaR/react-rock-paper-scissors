import React from 'react';
import { FormattedMessage } from 'react-intl';

const validate = (values) => {
  const errors = {};

  // Step 1
  if(!values.get('title')){
    errors.name = <FormattedMessage id="wizard.error.name"/> ;
  }

  return errors;
};

export default validate;