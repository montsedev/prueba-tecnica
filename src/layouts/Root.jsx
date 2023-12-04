// import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';

function Root() {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

Root.propTypes = {}

export default Root
