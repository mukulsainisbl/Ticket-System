import {
  FormLabel,
  Input,
  VStack,
  Container,
  Heading,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  
 const {login,authDetail} = useContext(AuthContext)
 
 
 async function handleLogin() {
    try {
        let res = await axios({
            method:"post",
            url:"https://reqres.in/api/login",
            data:{
                email,
                password,
            },

        })
        login(res.data.token)
       

      if(res.status === 200){
        navigate(`/tickets`)
      }
       
   
    } catch (error) {
        console.log(error)
    }
   
 }



  return (
    <Container>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Login Page
        </Heading>
        <FormLabel>
          Email :{" "}
          <Input
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormLabel>

        <FormLabel>
          Password :{" "}
          <Input
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </FormLabel>
        <Button variant="outline" colorScheme="red" onClick={handleLogin}>
          LOGIN
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
