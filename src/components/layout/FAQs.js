import React from 'react'
import { Box, Typography } from '@mui/material'

const FAQs = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Typography variant="h5" component="div" gutterBottom>
        FAQs:
      </Typography>

      <Typography variant="h6" component="div" gutterBottom sx={{ mb: 3}}>
        Important Info for Your Skydiving Experience:
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ mb: 2}}>
      <b>Jump Location</b>: All tandem jumps are done at the Miami Executive Airport
        or at the Miami Homestead General Aviation Airport. Both are fantastic
        locations to jump, each with unique freefall views of South Florida. If
        you want to ensure that you are going to jump with our Executive Service
        at the Miami Executive Airport, please visit our sister site at
        www.SkydiveSouthBeach.com, or purchase our VIP Priority Jumper service.
        If you want to ensure that you jump at the Miami Homestead General
        Aviation Airport, please visit www.SkydiveMiami.com. Please note that
        all jumps at the Executive Airport require a selection and purchase of
        video or pictures.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2}}>
      <b>Deposit and Gear Rental</b>: When you make a reservation, you will pay a $75
        deposit. This deposit will count as your gear rental and it will be
        deducted from the listed price that you owe when you arrive at the
        dropzone. Our no stress policy lets you get a refund for your
        deposit/gear rental if you change or cancel your reservation at least 48
        hours before your scheduled jump. But please note, a $25 administrative
        fee per jumper applies to all refund requests.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2}}>
        <b>Weight Limit</b>: There is an extra charge if you are over 200 pounds. The
        skydiving weight limit is 240 pounds, but call to inquire if you are
        over 240 pounds. The weight limit includes all clothing you intend to
        wear on your jump and is measured with our scale.
      </Typography>
    </Box>
  )
}

export default FAQs
