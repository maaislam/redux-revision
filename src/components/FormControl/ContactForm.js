import React from 'react';
import { Formik, Form } from 'formik';
import { ValidationSchema } from './ValidationSchema';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';

import Button from '../Button/Button';
import './form.css';
import MyInput from './MyInput';
import showNotification from '../../helpers/showNotification';

const ContactForm = () => {
  const notifier = (type) => {
    showNotification(type);
  };

  const clickHandler = () => {
    notifier('error');
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
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          console.log(actions);
          try {
            const result = await axios.post(
              'https://formspree.io/f/myybvlzo',
              values
            );
            actions.setSubmitting(false);
            actions.resetForm();
            notifier('success');
            console.log(result);
          } catch (err) {
            console.log(err);
            notifier('error');
            actions.setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Grid container>
            <Grid item xs={12}>
              <Form>
                <Grid container spacing={5} direction='column'>
                  <Grid item container spacing={4} justify='space-between'>
                    <Grid item className='input-group' xs={12} sm={6}>
                      <MyInput type='text' label='Name' name='name' />
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
                      disabled={isSubmitting}
                      colorScheme={'green'}
                      text='Send Message'
                      clickHandler={clickHandler}
                    />
                  </Grid>
                </Grid>
              </Form>
            </Grid>
          </Grid>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
