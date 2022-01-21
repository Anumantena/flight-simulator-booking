import * as React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function Header (props) {
  const { title, handleLogin } = props

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>

        <Button variant="outlined" size="small" onClick={handleLogin} sx={{ color: 'white' }}>
          Logout
        </Button>
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
