import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Link from '@mui/material/Link'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import Modal from '@mui/material/Modal'
import { Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '6px',
  boxShadow: 24,
  p: 4
}

function BookingAppointment (props) {
  const { disable, date, slot, handleClick, handleSlot, handleSubmit, setSlot, setDate } = props

  console.log({ date })
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setSlot('10:30AM-11:30AM')
    setDate('')
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

      <Link
        component="button"
        variant="body2"
        onClick={handleOpen}
      >
        Book Your Appointment
      </Link>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography component="h6" variant="h6" sx={{mb: 2}}>
                Book Appointment on:
              </Typography>
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
      </Modal>
    </LocalizationProvider>
  )
}

export default BookingAppointment
