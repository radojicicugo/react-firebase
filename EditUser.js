import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';



function EditUser(props) {

    const history = useHistory();
    const { users, editUser } = useContext(GlobalContext);


    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: "" 
    });

  
    const currentUserId = props.match.params.id;
    
   
  
    useEffect(() => {
      const userId = currentUserId;
      const selectedUser = users.find(user => user.id === user.id)

      setSelectedUser(selectedUser)
      console.log(selectedUser)
    }, [currentUserId, users])


    //provera ovde
      const onSubmit = () => {
       editUser(selectedUser)
   
          history.push('/') 
      }
  

      const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
      }
  


    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" placeholder="Enter Name" value={selectedUser.name}  onChange={onChange} ></Input>
            </FormGroup>
            <Button type="submit" >Edit Name</Button> 
        <Link to="/" className="btn btn-danger m-2" >Cancel</Link> 
        </Form>
    );
}

export default EditUser;