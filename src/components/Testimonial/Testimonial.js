import React from 'react';
import { Card, Grid, Avatar, Typography } from '@material-ui/core';
import { IoMdQuote } from 'react-icons/io';
import MyImage from '../../images/my-image-grey2.jpg';
const Testimonial = () => {
  return (
    <Card>
      <Grid container spacing={1} direction='column'>
        <Grid
          item
          container
          spacing={1}
          justify='space-between'
          alignitems='center'
          wrap='nowrap'
          xs={12}
        >
          <Grid item container spacing={1} wrap='nowrap' xs={10}>
            <Grid item>
              <Avatar alt='arafat' src={MyImage} />
            </Grid>
            <Grid item container spacing={1} direction='column'>
              <Typography variant='subtitle1' color='initial'>
                Client 1
              </Typography>
              <Typography variant='subtitle2' color='initial'>
                Client 1 detail
              </Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={1} xs={2} justify='flex-end'>
            <IoMdQuote size={64} />
          </Grid>
        </Grid>

        <Grid item container spacing={0}>
          <Typography variant='subtitle1' color='initial'>
            Emma did an excellent creative job, addressing our request quickly,
            and also providing her own graphic insight, being open to feedback
            and changes or edits when they arose. She worked with us the entire
            way. Highly recommended.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Testimonial;
