import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { IoLogoIonic, IoMdMap, IoMdCall, IoMdSend } from 'react-icons/io';

const useStyles = makeStyles((theme) => ({
  constactCol: {
    borderLeft: '2px solid',
    borderColor: theme.palette.grey[700],
    paddingLeft: theme.spacing(2),
  },
  linkcolor: {
    color: theme.palette.success.main,
  },
}));

const ContactInfo = () => {
  const classes = useStyles();

  return (
    <Grid item container spacing={2} direction='column'>
      <Grid item container direction='column'>
        <Typography
          variant='h5'
          color='initial'
          gutterBottom
          paragraph
          style={{ marginBottom: '32px' }}
        >
          Contact Info
        </Typography>
        <Typography
          variant='subtitle1'
          color='textSecondary'
          gutterBottom
          paragraph
        >
          Always available for freelance work if the right project comes along,
          Feel free to contact me!
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item container style={{ paddingBottom: 0 }}>
          <Grid item xs={2}>
            <IoLogoIonic color='#009E66' size='40' />
          </Grid>
          <Grid
            item
            container
            direction='column'
            spacing={1}
            xs={10}
            className={classes.constactCol}
          >
            <Typography variant='subtitle1' color='initial'>
              Name
            </Typography>
            <Typography variant='subtitle2' color='textSecondary' paragraph>
              Arafat Islam
            </Typography>
          </Grid>
        </Grid>
        <Grid item container style={{ paddingBottom: 0 }}>
          <Grid xs={2}>
            <IoMdMap color='#009E66' size='40' />
          </Grid>
          <Grid
            item
            container
            direction='column'
            spacing={1}
            xs={10}
            className={classes.constactCol}
          >
            <Typography variant='subtitle1' color='initial'>
              Location
            </Typography>
            <Typography variant='subtitle2' color='textSecondary' paragraph>
              Dhaka, Bangladesh
            </Typography>
          </Grid>
        </Grid>
        <Grid item container style={{ paddingBottom: 0 }}>
          <Grid xs={2}>
            <IoMdCall color='#009E66' size='40' />
          </Grid>
          <Grid
            item
            container
            direction='column'
            spacing={1}
            xs={10}
            className={classes.constactCol}
          >
            <Typography variant='subtitle1' color='initial'>
              Call Me
            </Typography>

            <Link className={classes.linkcolor} href='tel:+8801317171788'>
              <Typography variant='subtitle2' color='textSecondary' paragraph>
                +88 0131 7171788
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid item container style={{ paddingBottom: 0 }}>
          <Grid xs={2}>
            <IoMdSend color='#009E66' size='40' />
          </Grid>
          <Grid
            item
            container
            direction='column'
            spacing={1}
            xs={10}
            className={classes.constactCol}
          >
            <Typography variant='subtitle1' color='initial'>
              Email Me
            </Typography>
            <Link
              className={classes.linkcolor}
              href='mailto:maaislam@outlook.com'
            >
              <Typography variant='subtitle2' color='textSecondary' paragraph>
                maaislam@outlook.com
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
