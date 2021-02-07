import React from 'react';
import { useField } from 'formik';

import './form.css';

const MyInput = ({ label, variant, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.

  const [field, meta] = useField(props);

  const renderInput =
    variant === 'textarea' ? (
      <textarea type='text' {...field} {...props} />
    ) : (
      <input type={props.type || 'text'} {...field} {...props} />
    );

  return (
    <>
      {renderInput}
      <span className='highlight'></span>
      <span className='bar'></span>
      <label
        className={variant === 'textarea' ? 'textarea-label' : ''}
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
