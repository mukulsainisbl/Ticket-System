import { Textarea, VStack, Input, Select, Container, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState  } from "react";
import { useNavigate } from "react-router-dom";


const TicketCreate = () => {

  const [title,setTitle] = useState("")
  const [assignee, setAssignee] = useState("")
  const [status,setStatus] = useState("")
  const [description,setDescription] = useState("")
  const [priority,setPriority] = useState("")
  const navigate = useNavigate()

  const FinalData ={
    title,assignee,status,description,priority
  }

  async function handleTicketData(){
    let res = await axios({
      method:"post",
      url:`http://localhost:3000/tickets`,
      data:FinalData
    }) 
   if(res.status === 201){
      navigate(`/tickets`)
   }
   

  }


  return (
    <Container>
      <Heading Al>Create Ticket</Heading>
      <VStack spacing={6} marginTop={5}>
        <Input placeholder="Enter Title" size="lg" onChange={(e) =>  setTitle(e.target.value)}  />

        <Textarea placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} />

        <Select placeholder="Assignee"  onChange={(e) => setAssignee(e.target.value)}>
          <option value="rahul">Rahul</option>
          <option value="vinod">Vinod</option>
          <option value="rajat">Rajat</option>
        </Select>

        <Select placeholder="Status" onChange={(e) =>  setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="progress">Progress</option>
        </Select>
        <Select placeholder="Priority" onChange={(e) => setPriority(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </Select>
      </VStack>
      <Button onClick={handleTicketData}>Create Ticket</Button>
    </Container>
  );
};

export default TicketCreate;

// "id": "5",
// "title": "Design Landing Page",
// "description": "Create a new design for the landing page",
// "assignee": "Saharan",
// "status": "progress",
// "priority": 7
