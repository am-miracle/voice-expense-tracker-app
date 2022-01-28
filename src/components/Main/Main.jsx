// jshint esversion:9
import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard';

const Main = () => {
    const { root, cardContent, divider } = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

  return (
      <Card className={root}>
          <CardHeader title='Expense Tracker' subheader='Powered by speechly' />
          <CardContent>
              <Typography align='center' variant='h5'>Total Balance ${balance}</Typography>
              <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                  <InfoCard />
              </Typography>
              <Divider className={divider} />
                <Form />
          </CardContent>
          <CardContent className={cardContent}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <List />
                  </Grid>
              </Grid>
          </CardContent>
      </Card>
  );
};

export default Main;
