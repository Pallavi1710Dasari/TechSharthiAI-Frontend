import React from 'react';
import { Box } from '@mui/material';
import ContentArea from '../components/ContentArea';
import ChatContainer from '../components/ChatContainer';
import InputContainer from '../components/InputContainer';
import { useDispatch, useSelector } from 'react-redux';

function Chat({ setPreviousChatOpen, previousChatOpen }) {
  const dispatch = useDispatch();
  const fileInputRef = React.useRef(null);
  const ImageInputRef = React.useRef(null);
  const pdfInputRef = React.useRef(null);

  const { chats, currentChatIndex } = useSelector((state) => state.chat);

  const renderMessageContent = (content) => {
    if (content[0].type === 'text') {
      const formattedText = content[0].text
        .split('\n')
        .map((str, index) => {
          const trimmedStr = str.trimEnd();
  
          // Add formatting rules
          const formattedStr = trimmedStr
            .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>') // Code blocks
            .replace(/`(.*?)`/g, '<code>$1</code>') // Inline code
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // Bold
            .replace(/\*(.*?)\*/g, '<i>$1</i>') // Italic
            .replace(/__(.*?)__/g, '<b>$1</b>') // Bold with underscores
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>'); // Links
  
          return <p key={index} dangerouslySetInnerHTML={{ __html: formattedStr }} />;
        });
  
      // Return the formatted text with no additional space between paragraphs
      return <div>{formattedText}</div>;
    } else if (content[0].type === 'image_url') {
      return <img src={content[0].image_url.url} alt="Uploaded" style={{ height: '100%', width: '100%' }} />;
    }
  };
  

  return (
    <ContentArea>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          padding: '10px',
          boxSizing: 'border-box',
          overflowY: 'auto',
          scrollbarWidth: 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, and Opera */
          },
        }}
      >
        <ChatContainer renderMessageContent={renderMessageContent} />
      </Box>
      <InputContainer
        pdfInputRef={pdfInputRef}
        fileInputRef={fileInputRef}
        ImageInputRef={ImageInputRef}
      />
    </ContentArea>
  );
}

export default Chat;
