import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';



function UserList() {

    const {users, removeUser} = useContext(GlobalContext);

    
    return (
   
      <div>
      <ListGroup className="mt-4">  
       {users.map(user => (
         <ListGroupItem className="d-flex">
          <strong>{user.name}</strong>
          <div className="ml-auto">
            <Link to={`/edituser/${user.id}`} className="btn btn-warning m-3" >Edit</Link>
            <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
          </div>
      </ListGroupItem>
          
          
        

       )

       )}
    </ListGroup>
      </div>

      );
   
    
}


export default UserList;