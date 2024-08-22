import React, { useState } from 'react';
import { Box, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider, Typography } from '@mui/material';
import tectsharthilogo from '../public/techsharthilogo.png';
import { FaSquarePlus } from "react-icons/fa6";
import { BsFillFolderFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdHistory, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CgMenuRound } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewChat, setCurrentChat, setLoading } from '../store/store';
import { AiOutlineAppstore } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import PlanModel from './PlanModel';




const Sidebar = ({isSidebarOpen, onClickSidebar}) => {

  const [previousChatOpen, setPreviousChatOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false);


  const onIconClick = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const chats = useSelector((state) => state.chat.chats);

  const currentChatIndex = useSelector((state) => state.chat.currentChatIndex);

  const handleChatSelection = (index) => {
    dispatch(setCurrentChat(index));
    navigate('/chats')
  };

  const onPlusClick = () => {
    dispatch(setLoading(false))
    dispatch(addNewChat());
    navigate('/chats')
  };

  const onClickHome = () => {
    navigate("/");
  };

  const onClickChatHistory = () => {
    setPreviousChatOpen(!previousChatOpen)
  };

  const onClickPdf = () =>{
    navigate("/chatwithdoc")
  }

  const onClickLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  const onClickAiwriter=()=>{
    navigate('aiwriter')
  }




  const drawerWidth = isSidebarOpen ? 70 : 180;
  const togglebtn = isSidebarOpen ? "32px" : "130px";
  

  const RenderListItems = () => {
    const listOptions = [
      { text: 'Chat PDF', icon: <BsFillFolderFill />, click: onClickPdf },
      { text: 'AI Writer', icon: <BsPencilSquare />, click: onClickAiwriter },
      {text: 'Work Space', icon: <GoStack/>, click: ()=>{}},
      {text: "plan", icon: <AiOutlineAppstore/>, click: toggleModal}
    ];

    return (
      <List component='ul' style={{ marginLeft: "10px", 
                                    padding: isSidebarOpen ? "10px" : "10px",
                                    cursor:"pointer"
                                    // display: isSidebarOpen &&  "flex",
                                    // flexDirection: isSidebarOpen &&  "column",
                                    // justifyContent: isSidebarOpen &&  "center"
                                    }}>
        <button onClick={onPlusClick} style={{width: isSidebarOpen ? "30px" : "120px",
                        height: "30px",
                        color: "#ffffff", 
                        margin: "10px 20px 20px 0px", 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        backgroundColor: isSidebarOpen ? "transparent" : "#3c38ff",
                        outline: "none",
                        // padding: "",
                        borderWidth: "0px",
                        borderRadius: "3px",
                        cursor:"pointer"
                        }}>
            <FaSquarePlus 
              style={{
                      fontSize: isSidebarOpen ?  "15px" : "10px",
                      backgroundColor: isSidebarOpen && "#3c38ff",
                      padding: isSidebarOpen && "1px",  
                      marginRight: !isSidebarOpen && "5px" 
                     }}/>
              {!isSidebarOpen && " New Chat"}
        </button>
      {listOptions.map((option, index) => (
        <ListItem 
          button 
          key={index} 
          component="li"
          onClick={option.click}
          style={{padding: "5px", margin: "10px 10px 0px 0px", cursor:"pointer"}}
          >
          {React.cloneElement(option.icon, {
            style: {
              fontSize: isSidebarOpen? "15px" : "15px", 
              color: "#ffffff",
              margin: "0px 10px 5px 0px",
              backgroundColor: option.isSelected ? '#B0B0B0' : 'transparent', // Grey background for selected option
              '&:hover': {
                color: 'transparent', // Make text transparent to show gradient
                background: 'linear-gradient(90deg, #FF5722, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }
            }
          })}
          {!isSidebarOpen && <Typography  
            sx={{
              fontSize: "11px", 
              color: "#bfbfbf",
              fontWeight: 800,
              backgroundColor: option.isSelected ? '#B0B0B0' : 'transparent', // Grey background for selected option
              fontWeight: currentChatIndex === index ? 800 : 500,
              backgroundColor:  currentChatIndex === index && '#331a00',
              '&:hover': {
                color: 'transparent', // Make text transparent to show gradient
                background: 'linear-gradient(90deg, #FF5722, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }
            }}
          >
          {option.text}
          </Typography>}
        </ListItem>
      ))}
      {isModalOpen &&
       <div className="sidebar-item" onClick={onIconClick}>
              <AiOutlineAppstore size={30} onClick={toggleModal} style={{ cursor: 'pointer' }} />
              {isSidebarOpen && <p className="sidebar-description">Plans</p>}
              {isModalOpen && <PlanModel isOpen={isModalOpen} onClose={toggleModal} />} 
              {/* {isModalOpen && <Modal closeModal={closeModal} />} */}
       </div>
  }
       <button onClick={onClickSidebar} style={{
            backgroundColor: "transparent",
            height: "40px",
            zIndex: 24,
            width: "18px",
            padding: "2px",
            // margin: "0px 0px 0px 25px",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            textAlign: "left",
            outline: "none",
            borderWidth: "0px",
            color: "#ffffff",
            marginLeft: togglebtn,
            position: "relative",
            left: "2px",
            cursor:"pointer"
            // right: isSidebarOpen && "20%",
          }}>
           
          {isSidebarOpen ? <MdOutlineArrowForwardIos style={{fontSize: "15px", margin: "1px 15px 0px 0px"}}/>
          : <MdOutlineArrowBackIos style={{fontSize: "15px", margin: "1px 15px 0px 0px"}}/>}
              
          </button>
      <Divider color="#3E3E3E"/>
      
      <ListItem component="li" onClick={onClickChatHistory} style={{padding: "3px", 
                                        margin: "2px 10px 0px 0px", 
                                        display: 'flex',
                                        cursor:"pointer"
                                        }}>
        <MdHistory  style={
              {fontSize: "20px", 
              color: "#ffffff",
              margin: "0px 5px 5px 0px",
              '&:hover': {
                color: 'transparent', // Make text transparent to show gradient
                background: 'linear-gradient(90deg, #FF5722, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            }/>
           {  !isSidebarOpen &&
           <>
           <Typography  
            sx={{
              fontSize: "11px", 
              color: "#bfbfbf",
              fontWeight: 800,
             '&:hover': {
                color: 'transparent', // Make text transparent to show gradient
                background: 'linear-gradient(90deg, #FF5722, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }
            }}
          >
          Chat History
          </Typography>
          {previousChatOpen ? 
          <IoIosArrowDown style={{marginLeft: "10px", color: "#bfbfbf"}}/>
          : <IoIosArrowForward style={{marginLeft: "10px", color: "#bfbfbf"}}/>
        }
        </>
        }
        </ListItem>
    </List>    
    )
  };


  const ChatHistoryComponent = () =>{
    console.log(chats)
    return (
      <Box variant="permanent"
              sx={{
                width: drawerWidth,
                marginBottom: "auto",
                height: "200px",
                overflow: "auto",
                padding: "10px",
                cursor:"pointer"
              }}
              >
     
        <div>
          {chats.map((chat, index) =>{
            // console.log(chat)
            return(
            chat.messages.length > 1 &&   
            <div key={index} 
                style={{ cursor: 'pointer', 
                         fontWeight: currentChatIndex === index ? 800 : 500,
                         backgroundColor:  currentChatIndex === index && '#331a00',
                         listStyleType: "none",
                         margin: "10px 20px 10px 0px", 
                         color: "yellow",
                         fontSize: "10px",
                         fontFamily: "Roboto",
                         padding: "3px",
                         borderRadius: "2px",
                         textAlign: "center"
                        }} 
                         onClick={() => handleChatSelection(index)}
                         >
               <p style={{ margin: "2px" }}>
                {chat.messages[0]?.content[0].text}
              </p>
              {chat.messages[0]?.content[0].imageName && (
                <p style={{ margin: "2px", fontStyle: "italic" }}>
                  {chat.messages[0].content[0].imageName}
                </p>
              )}
            </div>
             )})}
        </div>
      </Box>
    )
  }


  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "#000000", overflow: "hidden" },
      }}
    >
      <Box onClick={onClickHome} sx={{ margin: "20px 0px 0px 20px", display: "flex", cursor:"pointer" }}>
        <img src={tectsharthilogo}
          alt="logo"
          style={{ height: "30px", width: "33px", marginTop: "10px" }}
        />
       { !isSidebarOpen && <Typography sx={{ marginTop: "10px" }}>
          <span style={{
            fontSize: "20px",
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft:"5px",
          }}>
            Math
          </span>
          <span style={{
            fontSize: "20px",
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #2a91ff, #4557f3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Sharthi
          </span>
        </Typography>}
      </Box>
       <RenderListItems />
       
      {previousChatOpen && <ChatHistoryComponent/>}
      <Box sx={{ margin: !isSidebarOpen && "auto 20px 30px 20px", marginTop : "auto", cursor:"pointer" }}>
        <Button
          onClick={handleLogout}
          sx={{
                textTransform: 'none', 
                boxShadow: 'none', 
                width: isSidebarOpen ? "40px" : "fit-content",
                height: isSidebarOpen ? "40px": "fit-content",
                color: "#ffffff",
                marginBottom: isSidebarOpen && "10px",
                textAlign: "center",
                backgroundColor: "#3c38ff",
                borderRadius: isSidebarOpen ? "80px" : "2px"
              }}
        >
          {isSidebarOpen ? <CgProfile /> : "Logout"}
        </Button>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
