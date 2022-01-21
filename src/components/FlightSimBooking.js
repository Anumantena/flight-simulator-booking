import React, { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Staff from './Staff'
import SignIn from './layout/SignIn'

import Appbar from './layout/Appbar'
import BookingLandingPage from './BookingLandingPage'

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

  // Todo:
  // https://www.miamiskydivingcenter.com/rates-faqs
  const handlePageRoute = () => {

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

  console.log({ disable, whoLoggedIn, isloggedIn })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isloggedIn ? (
        <SignIn handleLogin={handleLogin} setWhologgedIn={setWhologgedIn} />
      ) : (
        <Appbar handleLogin={handleLogin} handlePageRoute={handlePageRoute}>
          <Container maxWidth="xl" sx={{ p: 3 }}>
            <section>
              {!whoLoggedIn.includes('staff')
                // Go to Customer
                ? (
                  <BookingLandingPage
                      whoLoggedIn={whoLoggedIn}
                      date={date} slot={slot}
                      disable={disable}
                      setitems={setitems}
                      setDisabled={setDisabled}
                      handleClick={handleClick}
                      handleSlot={handleSlot}
                      handleSubmit={handleSubmit}
                      setSlot={setSlot}
                      setDate={setDate}
                      items={items}
                      handleRemove={handleRemove}
                  />
                  )
                // Go to Staff
                : (
                  <Grid container spacing={4}>
                    <Staff items={items} handleRemove={handleRemove} />
                  </Grid>)}
            </section>

          </Container>
        </Appbar>
      )}
    </ThemeProvider>
  )
}
