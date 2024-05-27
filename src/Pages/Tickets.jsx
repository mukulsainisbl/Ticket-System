import {
  Button,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Container,
  Flex,
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  CardFooter,
  Select,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorIndicator from "../Components/ErrorIndicator";
import LoadingIndicator from "../Components/LoadingIndicator";

function TicketCard({ title, status, priority, id }) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <Heading size="sm">{title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
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
              Priority
            </Heading>
            <Text pt="2" fontSize="sm">
              {priority}
            </Text>
          </Box>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => navigate(`/ticket/view/${id}`)}
        >
          View Ticket
        </Button>
      </CardFooter>
    </Card>
  );
}

const Ticekts = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [sortByOrder, setSortByOrder] = useState("");
  const [filterValue, setFilterValue] = useState("");

  async function FetchAndUpdate(sortByOrder , filterValue) {
    setLoading(true);
    try {
      let queryParams = {};

      if (filterValue) {
        queryParams.status = filterValue;
      }

      if (sortByOrder) {
        queryParams._sort = "priority";
        queryParams._order = sortByOrder;
      }
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets`,
        params: queryParams,
      });
      setTickets(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    FetchAndUpdate(sortByOrder ,filterValue);
  }, [sortByOrder,filterValue]);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container maxW="container.md">
      <Flex direction="row-reverse">
        <Button
          colorScheme="green"
          variant="solid"
          onClick={() => navigate(`/ticket/create`)}
        >
          Create Tickets
        </Button>
      </Flex>

      <HStack spacing={20} marginTop={3} paddingBottom={4}>
        <Select
          placeholder="Sort by Priority"
          value={sortByOrder}
          onChange={(e) => setSortByOrder(e.target.value)}
          
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>

        <Select placeholder="Sort by Status" value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
          <option value="progress">Progress</option>
          <option value="pending">Pending</option>
          <option value="completed"> Completed</option>
        </Select>
      </HStack>

      <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} spacing={8}>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Ticekts;
