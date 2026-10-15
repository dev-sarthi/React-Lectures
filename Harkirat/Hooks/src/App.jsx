import { useEffect, useState } from 'react';
import { PostComponent } from './Post';

// // Toggle message component
// function Togglemessage(){
//   const [isvisible,setisvisible]=useState(true);

// function Toggle(params) {
//   setisvisible(!isvisible);
// }

//   return(
//     <>
// <button onClick={Toggle}>Toggle the message</button>
// <h1>{isvisible && "Hello World"}</h1>
//     </>
//   )

// }


// // Notification count component
// function NotificationCount(){
// const [count,setcount]=useState(0);

// function increment(){
//   setcount(count+1);
// }
// return(
//   <div>
//     <button onClick={increment}>New Notification</button>
// <p>{count}</p>
//   </div>
// )

// }


function Navbar(){
const[CurrentTab,SetCurrentTab]=useState("Home");

useEffect(()=>{
  console.log("Send request to backend for " + CurrentTab);
  
},[CurrentTab])

return(
  <div>
    <button onClick={()=>{SetCurrentTab("Home")}} style={{color:CurrentTab=="Home" ? "red" : "black"}}>Home</button>
    <button onClick={()=>{SetCurrentTab("About")}} style={{color:CurrentTab=="About" ? "red" : "black"}}>About</button>
    <button onClick={()=>{SetCurrentTab("Notification")}} style={{color:CurrentTab=="Notification" ? "red" : "black"}}>Notification</button>
    <button onClick={()=>{SetCurrentTab("Settings")}} style={{color:CurrentTab=="Settings" ? "red" : "black"}}>Settings</button>
  </div>
)

}

function PostComp() {
  const [posts, setPosts] = useState([]);

  function addPost() {
    setPosts([
      ...posts,
      {
        id: crypto.randomUUID(),
        name: "harkirat",
        subtitle: "10000 followers",
        time: "2m ago",
        image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description: "What to know how to win big? Check out how these folks won $6000 in bounties."
      }
    ]);
  }
 
  return (
    <>

  <Navbar/>
  <br />
      <button onClick={addPost}>Add Post</button>
      {posts.map((post) => (
        <PostComponent
          key={post.id}
          name={post.name}
          subtitle={post.subtitle}
          time={post.time}
          description={post.description}
          image={post.image}
        />
      ))}
    </>

  )


}



function App() {

  return (
    <div>
      <PostComp />
    </div>
  )

}



//  card rendereing
// return (
//   <div>
//     {restaurants.map((element) => (
//       <ResCard key={element.id} resdata={element} />
//     ))}
//   </div>
// );
export default App;