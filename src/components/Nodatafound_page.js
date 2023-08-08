import React from "react";
import notfound from "../assets/entrance_images/notfound.png";

const Nodatafoundpage=()=>{
  return(
     <div style={{color:"white",textAlign:"center"}}>
        <h1>Sorry,Song Not Found :(,Once check with Spelling! </h1>
        <img src={notfound} alt="no data found..." />
     </div>
  );
}
export default Nodatafoundpage;