import React from 'react'; 
import Donations from '../components/donations'; 
import Container from '@material-ui/core/Container'; 
import Grid from '@material-ui/core/Grid'; 
import Card from '@material-ui/core/Card'; 
import Chart from '../components/linechart'; 

function Dashboard() {
  return (
    <Container>
      <h1>Welcome Legal Aid Society</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Donations></Donations>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Chart></Chart>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card></Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;