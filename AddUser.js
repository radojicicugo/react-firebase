import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {db} from '../firebase/fire';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';




function AddUser() {

 
  const [name, setName] = useState("");

  const history = useHistory();
  const { addUser } = useContext(GlobalContext);

    
    const onSubmit = () => {
      const newUser = {
        id: uuid(),
        name 
      }
        addUser(newUser);
        history.push('/') 
    }


    const onChange = (e) => {
      setName(e.target.value)
    }

    return (
        
        <div>
        
                 <Form onSubmit={onSubmit}>
                  <FormGroup>             
                  <Label>Name</Label>
                  <Input type="text" value={name} autoFocus placeholder="Enter Name" onChange={onChange}></Input>
                  </FormGroup>
                  <Button type="submit"  >Submit</Button>
                  <Link to="/" className="btn btn-danger m-2" >Cancel</Link> 
                  
            </Form> 
        </div>
    );
}

export default AddUser;