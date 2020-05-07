import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';


const Cards = ({ data: {confirmed, recovered, death, lastUpdate}}) => {
    console.log(confirmed)
if(!confirmed){
    return 'Loading ...'
}
    return (

        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBttom>
                            Infected
                            </Typography>
                        <Typography variant="h5">
                            {confirmed.value}
                        </Typography>
                        <Typography color="textSecondary" >
                            Real date
                            </Typography>
                        <Typography variant="body2">
                            Number of active cases of COVID-19
                            </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBttom>
                            Recovered
                            </Typography>
                        <Typography variant="h5">
                            Real date
                            </Typography>
                        <Typography color="textSecondary" >
                            Real date
                            </Typography>
                        <Typography variant="body2">
                            Number of recovered from COVID-19
                            </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBttom>
                            Death
                            </Typography>
                        <Typography variant="h5">
                            Real date
                            </Typography>
                        <Typography color="textSecondary" >
                            Real date
                            </Typography>
                        <Typography variant="body2">
                            Number of death from COVID-19
                            </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;