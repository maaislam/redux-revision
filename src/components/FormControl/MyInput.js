import React from 'react';
import { useField } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import './form.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.inputColor.main,
    color: theme.palette.inputColor.text,
  },
}));

const MyInput = ({ label, variant, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const classes = useStyles();
  const [field, meta] = useField(props);

  const renderInput =
    variant === 'textarea' ? (
      <textarea className={classes.root} type='text' {...field} {...props} />
    ) : (
      <input
        className={classes.root}
        type={props.type || 'text'}
        {...field}
        {...props}
      />
    );

  return (
    <>
      {renderInput}
      <span className='highlight'></span>
      <span className='bar'></span>
      <label
        className={`${variant === 'textarea' ? 'textarea-label' : ''} ${
          meta.touched
            ? variant === 'textarea'
              ? 'textarea-visited'
              : 'input-visited'
            : ''
        }`}
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <span className='error'>{meta.error}</span>
      ) : null}
    </>
  );
};

export default MyInput;
