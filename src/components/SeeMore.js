import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from 'react-icons/md';

import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  accordion: {
    backgroundColor: theme.palette.cardColor.main,
  },
}));

export default function SimpleAccordion({ details }) {
  const classes = useStyles();

  const renderDetails = details.map((detail, index) => {
    return (
      <Grid container key={index} wrap='nowrap'>
        <Typography variant='subtitle2' color='textSecondary' gutterBottom>
          &#8226; {detail}
        </Typography>
      </Grid>
    );
  });

  return (
    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant='subtitle2' color='textSecondary'>
            Learn More
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            spacing={1}
            direction='column'
            style={{ paddingLeft: '10px' }}
          >
            {renderDetails}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
