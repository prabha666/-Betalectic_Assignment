import React from 'react'
import Favorite from './Favorite';


export default function HasFav(props){

  
const t=props.cop;

  return (
    
<>
    

<div style={{backgroundColor:"lightblue",borderTop:"50px solid gray",width:"85%",height:"550px",marginLeft:"100px"}}>
        <h3 style={{marginLeft:"50px",marginTop:"50px"}}>Welcome to favorite npm package</h3>

        <div style={{border:"1px solid black",margin:"100px",height:"300px",width:"80%"}}>
            <h6 style={{textAlign:"center",marginLeft:"15%"}}>you dont have fav yet.please add</h6>
        
        <button style={{backgroundColor:"blue",float:'right',color:"white",borderRadius:"10px"}}>Add</button>
        
       
        
        </div>
        <Favorite />
           
        </div>
    
    
    
    </>
  )
}