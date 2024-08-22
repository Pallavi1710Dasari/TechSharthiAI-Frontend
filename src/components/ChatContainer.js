import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
 
function ChatContainer({ renderMessageContent}) {
  const { chats, currentChatIndex, loading } = useSelector((state) => state.chat);
  const chatEndRef = useRef(null);
 
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
 
  useEffect(() => {
    scrollToBottom();
  }, [chats[currentChatIndex]?.messages]);
 
  return (
    <Box style={{
       width: "100%"
    }}>
      {chats[currentChatIndex]?.messages.map((message, index) => (
        <Box key={index} sx={{
          fontSize: "14px",
          color: "#ffffff",
          fontWeight: 800,
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems : message.role === "user" ? "flex-end" : "flex-start",
        }}>
          <Box sx={{width: "fit-content",
                    maxWidth: "50%",
                    height: "fit-content",
                    maxHeight: "50%",
                    padding: "10px",
                    backgroundColor: message.role === "user" ? "#8dbcff" : "#d69f4c",
                    borderRadius: "10px"
                    }}>
            {renderMessageContent(message.content)}
          </Box>
        </Box>
      ))}
      {loading === true && (
        <Box className="message-assistant">
          <ReactLoading type="bubbles" color="#000" height={24} width={24} />
        </Box>
      )}
      <div ref={chatEndRef} />
    </Box>
  );
}
 
export default ChatContainer;