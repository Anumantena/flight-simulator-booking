import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

function BookingAppointment (props) {
  const { disable, date, slot, handleClick, handleSlot, handleSubmit } = props

  console.log({ date })
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ mb: 2 }}
              >
                Book Your Appointments Now:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="date"
                    label="Choose date"
                    type="date"
                    value={date}
                    sx={{ width: 220 }}
                    onChange={handleClick}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      min: new Date().toISOString().slice(0, 10)
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Book your slot"
                    onChange={handleSlot}
                    value={slot}
                  >
                    <MenuItem value="10:30AM-11:30AM">10:30AM-11:30AM</MenuItem>
                    <MenuItem value="12:00PM-1:00PM">12:00PM-1:00PM</MenuItem>
                    <MenuItem value="2:00PM - 3:00PM">2:00PM - 3:00PM</MenuItem>
                    <MenuItem value="4:00PM-5:00PM">4:00PM -5:00PM</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={disable}
              >
                Checkout your booking
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </LocalizationProvider>
  )
}

BookingAppointment.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  slot: PropTypes.string.isRequired
}

export default BookingAppointment
