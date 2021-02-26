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
  const FORMSPREE_ID = 'f/myybvlzo'; //process.env.REACT_APP_FORMSPREE_ID;

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
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          console.log(actions);
          try {
            await axios.post(`https://formspree.io/${FORMSPREE_ID}`, values);
            actions.setSubmitting(false);
            actions.resetForm();
            notifier('success');
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
                      <MyInput
                        type='text'
                        label='Name'
                        name='name'
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item className='input-group' xs={12} sm={6}>
                      <MyInput
                        type='text'
                        label='Email Address'
                        name='email'
                        disabled={isSubmitting}
                      />
                    </Grid>
                  </Grid>

                  <Grid item className='input-group'>
                    <MyInput
                      type='text'
                      label='Subject'
                      name='subject'
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item className='input-group'>
                    <MyInput
                      variant='textarea'
                      rows='6'
                      cols='50'
                      type='text'
                      label='Message'
                      name='message'
                      disabled={isSubmitting}
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
