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
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'

function Staff (props) {
  const { items = [], handleRemove } = props

  const [weatherDates, setWeatherDates] = useState([])

  React.useEffect(() => {
    axios
      .get(
        'http://api.weatherapi.com/v1/forecast.json?key=bda0fad576df4b9ebb4161109221901&q=23508&days=10&aqi=no&alerts=no'
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
    <Grid item xs={12} md={6}>
      <Card sx={{ display: 'flex' }}>
          <Box noValidate sx={{ m: 3 }}>
            <Grid container spacing={2}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ ml: 2 }}
              >
                Weather forecast:
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Temperature</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {weatherDates.map((item, key) => (
                    <TableRow key={key}>
                      <TableCell>{item.day.avgtemp_f} °F</TableCell>
                      <TableCell>{item.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
                    <TableCell>Cancel his booking</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Slot</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, key) => (
                    <TableRow key={key}>
                      <Button variant="text" onClick={() => handleRemove(item)}>Cancel</Button>
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
