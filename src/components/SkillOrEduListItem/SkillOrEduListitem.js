import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    maxWidth: '550px',
    padding: '1rem 2rem',
    borderLeft: '3px solid',
    borderLeftColor: '#009e66',
    borderRadius: 0,
  },
  bullet: {
    content: '',
    display: 'block',
    position: 'absolute',
    height: '16px',
    left: 0,
    top: '2.5rem',
    width: '16px',
    backgroundColor: '#009e66',
  },
  triangle: {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '2.5rem',
    left: '1rem',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderLeft: '8px solid #009e66',
    borderBottom: '8px solid transparent',
  },
});

const SkillOrEduListitem = ({ title, detail, description }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <span className={classes.bullet}></span>
        <span className={classes.triangle}></span>
        <Typography variant='h5' className='item-title' gutterBottom>
          {title}
        </Typography>
        <Typography variant='subtitle1' className='item-details' gutterBottom>
          {detail}
        </Typography>
        <Typography variant='subtitle2' className='item-description'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
SkillOrEduListitem.defaultProps = {
  title: '',
  detail: '',
  description: '',
};

export default SkillOrEduListitem;
