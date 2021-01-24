import React from 'react';

import SkillOrEduListitem from '../components/SkillOrEduListItem/SkillOrEduListitem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import SimpleAccordion from '../components/SeeMore';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
}));

const Education = ({ headline, data }) => {
  const classes = useStyles();

  const renderData = data.map(({ title, detail, description }, index) => {
    return (
      <Grid item key={index}>
        <SkillOrEduListitem
          title={title}
          detail={detail}
          description={<SimpleAccordion details={description} />}
        />
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={0} justify='center' direction='column'>
        <Grid item>
          <Typography variant='h5' color='initial' align='left' gutterBottom>
            {headline}
          </Typography>
        </Grid>
        {renderData}
      </Grid>
    </div>
  );
};

export default Education;
