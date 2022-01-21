import * as React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import LoginLogout from './LoginLogout'
function Header (props) {
  const { title, handleLogin } = props

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Typography
          component="h4"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>

        <LoginLogout handleClose={handleLogin}/>
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
