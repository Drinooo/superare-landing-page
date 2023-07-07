import { Button } from '@material-tailwind/react'
import React from 'react'

export const FilledButton = ({children, color}) => {
  return (
    <Button variant="filled" className='bg-purple rounded-full font-main font-regular lg:text-button sm:text-phone-button text-white'>{children}</Button>
  )
}

export const OutlinedButton = ({children}) => {
  return (
    <Button variant="outlined" className='border-purple border-2 rounded-full font-main font-regular lg:text-button sm:text-phone-button text-purple'>{children}</Button>
  )
}

export const WhiteButton = ({children}) => {
  return (
    <Button variant="filled" className='bg-white rounded-full font-main font-regular lg:text-button sm:text-phone-button text-black'>{children}</Button>
  )
}

export const WhiteOutlinedButton = ({children, color}) => {
  return (
    <Button variant="outlined" className='border-white border-2 rounded-full font-main font-regular lg:text-button sm:text-phone-button text-white'>{children}</Button>
  )
}