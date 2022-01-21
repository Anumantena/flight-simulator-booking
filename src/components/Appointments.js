import * as React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'

function Appointments (props) {
  const { items, handleRemove, date } = props

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ ml: 2 }}
              >
                Appointments booked:
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Slot</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, key) => (
                    <TableRow key={key}>
                      {console.log('item.date, date', item.date, date)}
                      <Button
                        onClick={(e) => handleRemove(item)}
                        variant="text"
                        disabled={item.date > date}
                      >
                        Cancel
                      </Button>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.slot}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      {/* </CardActionArea> */}
    </Grid>
  )
}

Appointments.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Appointments
