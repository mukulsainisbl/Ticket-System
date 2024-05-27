import {
  Button,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,

  HStack
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";


const TicketsView = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ticket, setTicket] = useState({});
  const naviagte = useNavigate()

  async function fetchTicket(id) {
    try {
      setLoading(true);
      let res = await axios.get(`http://localhost:3000/tickets/${id}`);
      setTicket(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTicket(id);
  }, [id]);

 async  function handleDelete(){
try {
  let res= await axios({
    method:"delete",
    url:`http://localhost:3000/tickets/${id}`
   })
   if(res.status === 200){
    naviagte(`/tickets`)
   }
  
} catch (error) {
  console.log(error)
  
}
  }

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  const { assignee, description, priority, status, title } = ticket;

  return (
    <Container>
      <Card>
        <CardHeader>
          <Heading size="sm">Ticket Details</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Title
              </Heading>
              <Text pt="2" fontSize="sm">
                {title}
              </Text>
            </Box>

            <Box>
              <Heading size="xs" textTransform="uppercase">
                Description
              </Heading>
              <Text pt="2" fontSize="sm">
                {description}
              </Text>
            </Box>

            <Box>
              <Heading size="xs" textTransform="uppercase">
                Status
              </Heading>
              <Text pt="2" fontSize="sm">
                {status}
              </Text>
            </Box>

            <Box>
              <Heading size="xs" textTransform="uppercase">
                Assignee
              </Heading>
              <Text pt="2" fontSize="sm">
                {assignee}
              </Text>
            </Box>

            <Box>
              <Heading size="xs" textTransform="uppercase">
                Priority
              </Heading>
              <Text pt="2" fontSize="sm">
                {priority}
              </Text>
            </Box>
          </Stack>
        </CardBody>

        <CardFooter>
          <HStack>
          <Button variant="solid" colorScheme="blue" onClick={ () => naviagte(`/ticket/edit/${id}`)}>
            Edit Ticket
          </Button>
          <Button variant="solid" colorScheme="blue" onClick={ handleDelete}>
            Delete Ticket
          </Button>
          </HStack>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default TicketsView;
