import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Toy(){
  const maskingName = (name) => {
    if(name.length <=2 ){

    }
    return(
      name[0] + "*".repeat(name.substring(1, name.length - 1).length) + name[name.length -1]
    )
  }
  return (
    <div>

    </div>
  );
}



export default Toy;