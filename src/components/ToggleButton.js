import { MdOutlineArrowBackIos, MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"
import Sidebar from "./Sidebar"



export const ToggleButton = () =>{
 return(
    <button style={{
      backgroundColor: "#bfbfbf",
      height: "40px",
      zIndex: 2,
      width: "10px",
      padding: "5px",
      minWidth: "2px",
      margin: "0px 0px 0px 25px",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
      textAlign: "left",
      fontSize: "30px",
      outline: "none",
      borderWidth: "0px",
      color: "red"
    }}>
     
    <MdOutlineArrowForwardIos style={{fontSize: "20px", margin: "0px 15px 0px 0px"}}/>
    <MdOutlineArrowBackIosNew style={{fontSize: "20px", margin: "0px 15px 0px 0px"}}/>
        
    </button>
 )
}