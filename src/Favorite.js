import React, { useState, useEffect } from "react";
// import HasFav from "./HasFav"
// import "./styles.css"
// import axios from "axios";

function Favorite() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
   const [display,setDisplay]=useState([]);

   const [record,setRecord]=useState('');


  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      await fetch(
        "https://api.npms.io/v2/search?q=reactjs"
      ).then((response)=>{
        response.json().then((result)=>{
          setPosts(result.results);
          setLoading(false);  
        
          
          
        })
      })
     
    };

    loadPosts();
  }, []);


  function sendData(){
    localStorage.setItem("1", JSON.stringify(searchTitle));

  }

  return (
    <div className="App" style={{borderTop:"50px solid gray",margin:"100px",backgroundColor:"lightblue"}}>
         <div style={{backgrounColor:"gray",width:"100%",height:"50px",marginLeft:"550px",marginTop:"50px"}}>  <a class="navbar-brand" href="#">https://api.npms.io/v2/search?q=reactjs</a></div> 
        <div className="App" style={{margin:"30px"}}>
      <h3>search for npm package</h3>
      <input
        style={{ width: "70%", height: "35px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.package.name.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => 
          <h5 > <input type="radio" onClick={()=>{
            setDisplay((t)=>[...t,item.package.name])
          }}/> {item.package.name}</h5>
          
          )
         )
      }
    <div style={{border:"1px solid black",height:"150px",width:"95%" ,margin:"20px"}} >
        {
            display.map((ite)=><h1>{display}</h1>)
        }
    </div>
    <input type="submit" onclick={sendData} style={{backgroundColor:"blue", float:"right",margin:"20px",color:"white",borderRadius:"10px"}} />
    {/* <Link class="nav-link active" aria-current="page" to="/nofav">NoFav</Link> */}
    </div>    
   
    </div>
    


  );
}

export default Favorite;