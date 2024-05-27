import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Ticekts from "../Pages/Tickets";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import TicketCreate from "../Pages/Ticket Create";
import TicketEdit from "../Pages/Ticket Edit";
import TicketsView from "../Pages/Tickets View";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/about"
        element={
          <PrivateRoute>
            {" "}
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            {" "}
            <Contact />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/tickets"
        element={
          <PrivateRoute>
            <Ticekts />
          </PrivateRoute>
        }
      />

      <Route
        path="/ticket/create"
        element={
          <PrivateRoute>
            <TicketCreate />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/view/:id"
        element={
          <PrivateRoute>
            {" "}
            <TicketsView />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/edit/:id"
        element={
          <PrivateRoute>
            {" "}
            <TicketEdit />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
