import React, { useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import TodayIcon from '@mui/icons-material/Today'

function Staff (props) {
  const { items = [], handleRemove } = props

  const [weatherDates, setWeatherDates] = useState([])

  React.useEffect(() => {
    axios
      .get(
        'https://api.weatherapi.com/v1/forecast.json?key=bda0fad576df4b9ebb4161109221901&q=23508&days=10&aqi=no&alerts=no'
      )
      .then((json) => {
        setWeatherDates(json.data?.forecast?.forecastday)
        // console.log(json.data)

        //     json.data?.forecast?.forecastday.forEach((wd) => {
        //       console.log(wd.day.avgtemp_c, wd.date)
        //     })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Grid item xs={12} md={12}>
      <Box sx={{ mb: 3 }}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Weather forecast:
        </Typography>

        <Container maxWidth="xl" sx={{ p: 0 }}>
          <Grid container spacing={4}>
            {weatherDates.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardActionArea sx={{ cursor: 'default' }}>
                    <CardMedia
                      component="img"
                      image={card.day.condition.icon}
                      alt="random"
                      sx={{
                        width: '100px',
                        margin: '0 auto'
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        display="flex"
                        justifyContent="left"
                        alignItems="center"
                      >
                        <ThermostatIcon />
                        <span>
                          : {console.log('card>>', card)}
                          {card.day.avgtemp_f} °F
                        </span>
                      </Typography>
                      <Typography
                        display="flex"
                        justifyContent="left"
                        mb={1}
                        alignItems="center"
                      >
                        <TodayIcon />
                        <span>: {card.date} </span>
                      </Typography>
                      <Typography
                        display="flex"
                        justifyContent="left"
                        alignItems="center"
                      >
                        {card.day.condition.text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* <WeatherList /> */}
        </Container>
      </Box>
      <Card sx={{ display: 'flex' }}>
        <Box noValidate sx={{ m: 3 }}>
          <Grid container spacing={2}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
              sx={{ ml: 2, mt: 5 }}
            >
              Appointments Customer booked:
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Cancel his/her booking</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Slot</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item, key) => (
                  <TableRow key={key}>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={(e) => handleRemove(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.slot}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Box>
      </Card>
    </Grid>
  )
}

export default Staff
