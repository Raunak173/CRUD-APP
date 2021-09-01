import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Container,
  Button,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    marginTop: "8%",
  },
  fc: {
    marginTop: "2%",
  },
  btn: {
    marginTop: "4%",
    width: "20%",
    margin: "auto",
  },
});

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const classes = useStyles();
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  let history = useHistory();

  const url = "http://localhost:8000/users";

  const getUsers = async (id) => {
    return await axios.get(`${url}/${id}`);
  };

  const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user);
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    history.push("/all");
  };

  return (
    <Container className={classes.container}>
      <FormGroup>
        <FormControl className={classes.fc}>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl className={classes.fc}>
          <InputLabel>UserName</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={username}
          />
        </FormControl>
        <FormControl className={classes.fc}>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl className={classes.fc}>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={phone}
          />
        </FormControl>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          Edit User
        </Button>
      </FormGroup>
    </Container>
  );
};

export default EditUser;
