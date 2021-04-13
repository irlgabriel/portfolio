import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: '1.5rem',
    position: 'relative',
    width: '300px',
    height: '300px',
    margin: '0 auto'
  },
  curvedLine: {
    width: '300px',
    borderRadius: '150px',
    height: '300px',
    position: 'absolute',
    left: props => props.direction === 'right' ? 'calc(50% - 8px)' : '',
    right: props => props.direction === 'left' ? '50%' : '',
    zIndex: props => props.order + 1,
    border: props => '8px solid ' + props.color,
    borderColor: props => props.direction === 'right' 
      ? `transparent transparent transparent ${props.color}`
      : `${props.color} transparent transparent transparent`,
    transform: `rotate(45deg)`,
  },
  trailingLine: {
    '&:before': {
      content: '""',
      borderTop: '20px solid transparent',
      borderRight: props => props.direction === 'right' ? `20px solid ${props.color}` : '',
      borderLeft: props => props.direction === 'left' ? `20px solid ${props.color}` : '',
      top: '-155px',
      right: props => props.direction === 'left' ? '140px' : 'unset',
      left: props => props.direction === 'right' ? '140px' : 'unset',
      position: 'absolute',
      transform: props => props.direction === 'left' ?  'rotate(45deg)' : 'rotate(-45deg)',
    },
    position: 'absolute',
    height: props => props.order === props.count ? '126px' : '300px',
    width: '8px',
    background: props => props.color,
    zIndex: props => props.order + 1,
    left: 'calc(50% - 8px)',
    bottom: props => props.order === props.count ? 0 : '-174px',
  },
})


export default (props) => {
  const classes = useStyles(props);

  return (
    <Box className={classes.root}>
      <Box className={classes.curvedLine} />
      <Box className={classes.trailingLine} />
    </Box>
  )
}