import React from 'react'
import { useEffect,useState } from 'react';
import '../Styles/Details.css'


  function App() {
    const [post,setPost] = useState(null);
    useEffect (()=> {
     fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
     .then(res => setPost(res))
     
  
    })
  return (
    <div>
      {
        (post) ? (<ul>
          {
            post.map(post =>{
              return (
              <li>
              <div class="card" >
                
             
  
  <div className="card-body">
    
    <h5 className="card-title">ID   :  {post.id}</h5>
    <p className="card-text"><h2> {post.name}</h2>
                      <h5>UserName: {post.username}</h5>
                      <h5> Email:{post.email}</h5>
                      <h5> Address: {post.address.street}</h5>
                      
                     
                      
                      
                      <h5>Company name: {post.company.name}</h5>
                      
                      <h5>Phone: {post.phone}</h5>
</p>
    
  </div>
</div>
              
                </li>)
            })
          }
        </ul>):(<h3>loading</h3>)
      }
    </div>)}
              
              
          

export default App