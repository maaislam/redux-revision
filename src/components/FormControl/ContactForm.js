import React from 'react';
import { Formik, Form } from 'formik';
import { ValidationSchema } from './ValidationSchema';
import { Grid, Typography } from '@material-ui/core';
import Button from '../Button/Button';
import './form.css';
import MyInput from './MyInput';

const ContactForm = () => {
  const clickHandler = () => {
    return;
  };
  return (
    <>
      <Typography
        variant='h5'
        color='initial'
        paragraph
        gutterBottom
        style={{ marginBottom: '32px' }}
      >
        Message Me
      </Typography>
      <Formik
        initialValues={{ firstName: '', email: '', subject: '', message: '' }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          console.log(
            '🚀 ~ file: ContactForm.js ~ line 19 ~ onSubmit={ ~ actions',
            actions
          );
          await new Promise((r) => setTimeout(r, 500));
          actions.resetForm();
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Form>
              <Grid container spacing={5} direction='column'>
                <Grid item container spacing={4} justify='space-between'>
                  <Grid item className='input-group' xs={12} sm={6}>
                    <MyInput type='text' label='First Name' name='firstName' />
                  </Grid>
                  <Grid item className='input-group' xs={12} sm={6}>
                    <MyInput type='text' label='Email Address' name='email' />
                  </Grid>
                </Grid>

                <Grid item className='input-group'>
                  <MyInput type='text' label='Subject' name='subject' />
                </Grid>
                <Grid item className='input-group'>
                  <MyInput
                    variant='textarea'
                    rows='6'
                    cols='50'
                    type='text'
                    label='Message'
                    name='message'
                  />
                </Grid>
                <Grid item>
                  <Button
                    colorScheme={'green'}
                    text='Send Message'
                    clickHandler={clickHandler}
                  />
                </Grid>
              </Grid>
            </Form>
          </Grid>
        </Grid>
      </Formik>
    </>
  );
};

export default ContactForm;
