import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from "axios";

export default function Countries() {

    const [value, setValue] = useState([])

    const getApi = async () => {
        try {
            const data = await axios({
                method: "GET",
                url: "https://restcountries.com/v2/all?fields=name,region,flag"
            })
            setValue(data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getApi();
    }, [])

    return (

        <Grid container spacing={1} style={{ marginTop: 10, padding: 10 }}>
            {value.map((data) => (
                <Grid item xs={12} md={6} >
                    <Card sx={{ display: "flex", padding: 2, width: "100%", height: 150, border: "2px solid #202920" }} elevation={0}>
                        <CardMedia
                            component="img"
                            sx={{ width: 140 }}
                            image={data.flag}
                            alt="Live from space album cover"
                        />
                        <CardContent sx={{ display: 'flex', justifyContent: "center", flexDirection: "column" }}>
                            <Typography gutterBottom style={{ fontSize: "20px" }} >
                                {data.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" >
                                {data.region}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
