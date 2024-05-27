

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'


const ErrorIndicator = () => {

  return (
    <div>
        
   <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Something Went Wrong</AlertTitle>
  <AlertDescription>Please Refresh the page...</AlertDescription>
</Alert>
  
  </div>
  )
}

export default ErrorIndicator