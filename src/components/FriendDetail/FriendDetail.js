// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState} from 'react';

// const FriendDetail = () => {
//     const {friendId}= useParams();
//     const [friend, setFriend] = useState({})
//     useEffect(()=>{
//         const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
//         fetch(url)
//         .then(res => res.json())
//         .then(data => setFriend(data))
//     },[])
//     return (
//         <div>
//             <h2>This is Detail of a friend: {friendId}</h2>
//             <h3>Name: {friend.name}</h3>
//             <h4>Email: {friend.email}</h4>
//             <h5>Website:{friend.website}</h5>
//             <p>City: {friend.address?.city}</p>
//             <p>Lat: {friend.address?.geo.lat}</p>
//         </div>
        
//     );
// };

// export default FriendDetail;