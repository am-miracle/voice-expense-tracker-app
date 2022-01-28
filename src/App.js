// jshint esversion:9
import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import { SpeechState, useSpeechContext } from '@speechly/react-client'

import Details from './components/Details/Details';
import Main from './components/Main/Main';

import useStyles from './styles';

function App() {
  const { grid, desktop, mobile, middle, last } = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(()=>{
    if(speechState === SpeechState.Recording){
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid className={grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4} className={mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={middle}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
