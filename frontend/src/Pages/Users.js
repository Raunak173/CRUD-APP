import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  cont: {
    marginTop: "5%",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "25px",
  },
});

const Users = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState([]);

  const url = "http://localhost:8000/users";

  const getUsers = async () => {
    return await axios.get(url);
  };

  const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUserData(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Container className={classes.cont}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.heading}>ID</TableCell>
            <TableCell className={classes.heading}>Name</TableCell>
            <TableCell className={classes.heading}>UserName</TableCell>
            <TableCell className={classes.heading}>Email</TableCell>
            <TableCell className={classes.heading}>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "12px" }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserData(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Users;
