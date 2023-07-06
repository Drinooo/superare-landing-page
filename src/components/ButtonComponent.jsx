import { Button } from '@material-tailwind/react'
import React from 'react'

export const FilledButton = ({children, color}) => {
  return (
    <Button variant="filled" className='bg-purple rounded-full font-main font-regular text-button text-white'>{children}</Button>
  )
}

export const GradientButton = ({children}) => {
  return (
    <Button variant="gradient">{children}</Button>
  )
}

export const OutlinedButton = ({children}) => {
  return (
    <Button variant="outlined" className='border-purple rounded-full font-main font-regular text-button text-purple'>{children}</Button>
  )
}

export const TextButton = ({children, color}) => {
  return (
    <Button variant="text">{children}</Button>
  )
}