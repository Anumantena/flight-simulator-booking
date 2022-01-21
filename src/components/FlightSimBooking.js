import React, { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Header from './layout/Header'
import BgImage from './layout/BgImage'
import BookingAppointment from './BookingAppointment'

import Footer from './layout/Footer'
import Appointments from './Appointments'
import Staff from './Staff'
import SignIn from './layout/SignIn'

const bgProps = {
  title: 'Flight Simulator Application',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image:
    'https://img-vimbly-com-images.imgix.net/full_photos/0_new-tandem-skydiving-2.jpg?auto=compress&fit=crop&h=490&ixlib=php-1.2.1&w=730',
  imageText: 'main image description',
  linkText: 'Continue reading…'
}

const theme = createTheme()

export default function FlightSimBooking () {
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('10:30AM-11:30AM')
  const [items, setitems] = useState([])
  const [disable, setDisabled] = useState(false)
  const [isloggedIn, setIsLoggedIn] = useState(false)
  const [whoLoggedIn, setWhologgedIn] = useState('')

  const handleClick = (e) => {
    setDate(e.target.value)
  }

  const handleSlot = (e) => {
    setSlot(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setitems([...items, { date: date, slot: slot }])
    setDisabled(true)

    alert('Successfully booked your appointment')
  }

  const handleRemove = (item) => {
    const bookings = items.filter(
      (filteritem) => filteritem.date !== item.date
    )
    setitems(bookings)
  }

  // Handling login flag
  const handleLogin = () => {
    console.log('handleLogin called', isloggedIn)
    setIsLoggedIn(!isloggedIn)
  }

  // Authentication clean up here
  useEffect(() => {
    if (!isloggedIn) {
      setWhologgedIn('')
    }
  }, [isloggedIn])

  useEffect(() => {
    let matchDate = false
    items.forEach(item => {
      console.log('disable', item.date, date)
      if (item.date === date) {
        matchDate = true
      }
    })
    console.log({ matchDate })
    if (matchDate) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [date])

  console.log({ disable })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isloggedIn ? (
        <SignIn handleLogin={handleLogin} setWhologgedIn={setWhologgedIn} />
      ) : (
        <Container maxWidth="lg">
          <Header
            title="Flight Simulator Application"
            handleLogin={handleLogin}
          />
          <main>
            {!whoLoggedIn.includes('staff')
            // Go to Customer
              ? (
              <>
                <BgImage bgProps={bgProps} whoLoggedIn={whoLoggedIn}/>
                <Grid container spacing={4}>
                  <BookingAppointment
                    date={date}
                    slot={slot}
                    disable={disable}
                    setitems={setitems}
                    setDisabled={setDisabled}
                    handleClick={handleClick}
                    handleSlot={handleSlot}
                    handleSubmit={handleSubmit}
                  />
                  <Appointments items={items} handleRemove={handleRemove} date={date}/>
                </Grid>
              </>
                )
              // Go to Staff
              : (
              <Grid container spacing={4}>
                <Staff items={items} handleRemove={handleRemove}/>
              </Grid>
                )}
          </main>
        </Container>
      )}
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}
