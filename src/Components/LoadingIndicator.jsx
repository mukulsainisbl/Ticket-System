import { Spinner } from '@chakra-ui/react'
const LoadingIndicator = () => {
  return (
    <div>



<Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    marginLeft="45%"
  />

    </div>
  )
}

export default LoadingIndicator