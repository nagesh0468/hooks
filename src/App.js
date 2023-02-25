// import { useState } from "react";
// import Hustate from "./hooks/Usestate";
// import UseReducer from "./hooks/UseReducer";
// import Lifting from "../src/useContex/Lifting";
// import EnterDetails from "./useContex/EnterDetails";

// import LayOut from "./useContex/LayOut";
// import Nav from "./useContex/components/Nav";
// import Header
//  from "./useContex/components/Header";


// function App() {
// const [initialCard, currentCard ] = useState("react");
// const [data,setData] = useState({
//   name : "Name",
//   email : "Email",
//   password :  "Password",
// })

// const {name, email, password} = data;
//   return (
//     <div
//     style={{ background: "#12ff3d",
//   height : '100vh',
//   display : 'flex',
// alignItems : 'center',}}
//     > 
// {/* <Hustate/>
// <UseReducer/> */}
//    <Lifting title='react' initialCard={initialCard} setter={currentCard}  />
//    <Lifting title='vue'  initialCard={initialCard} setter={currentCard} />
//    <Lifting title='angular' initialCard={initialCard} setter={currentCard} />

   
//      <div>
//      <h2>Name: {name} </h2>
//      <h2>email :{email} </h2>
//      <h2> password : {password} </h2>
//      <EnterDetails field='enter' setData={setData} data={data}  />
//      </div>

//     </div>

//   )
// }

// export default App;

// function App() {
//   return(
//     <div>
//       App
//       <LayOut/>
//     </div>
//   )
// }

// export default App;

import Layout from "../src/liftingUp/Laytout";

function App() {
  return(
    <div>
     <Layout/>
    </div>
  )
}

export default App;