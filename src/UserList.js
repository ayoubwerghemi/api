import axios from 'axios';
import React, {useState,useEffect} from 'react';

const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState(null);
    const [error,setError]= useState(null);

    useEffect(()=> {
         axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res=>setListOfUSer(res.data)
         )
         .catch(err => console.log('ghghhghgghghhg',err))
    },[]) 

    return (
        <div>
            

     { listOfUSer && listOfUSer.map(pers=>(
         <li>
             {pers.username}
         </li>
     ))}

        </div>
    )
}

export default UserList;