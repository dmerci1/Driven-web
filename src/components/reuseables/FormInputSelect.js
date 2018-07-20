import React from 'react';
import { Form, Label, Select } from 'semantic-ui-react';

const FormInputSelect = ({ input, rows, type, placeholder, options, multiple, meta: {touched, error }}) => {
  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} rows={rows}></textarea>
      <Select
        value={input.value || null}
        onChange={(event, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multipe={multiple}
      />
      {touched && error && <Label basic color='red'>{error}</Label>}

    </Form.Field>
  );
};

export default FormInputSelect;
