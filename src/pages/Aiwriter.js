import React, { useState } from 'react';
 
function AIWriter() {
  const [inputText, setInputText] = useState('');
  const [noWords, setNoWords] = useState('');
  const [blogStyle, setBlogStyle] = useState('Researchers');
  const [generatedText, setGeneratedText] = useState('');
 
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/ai_writer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input_text: inputText, no_words: noWords, blog_style: blogStyle })
      });
     
      const data = await response.json();
      if (response.ok) {
        setGeneratedText(data.generated_text);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
 
  return (
    <div>
      <h2>AI Writer 🤖</h2>
      <input
        type="text"
        placeholder="Enter the Blog Topic"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        type="text"
        placeholder="No of Words"
        value={noWords}
        onChange={(e) => setNoWords(e.target.value)}
      />
      <select
        value={blogStyle}
        onChange={(e) => setBlogStyle(e.target.value)}
      >
        <option value="Researchers">Researchers</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Common People">Common People</option>
      </select>
      <button onClick={handleSubmit}>Generate</button>
 
      {generatedText && <div><h3>Generated Text:</h3><p>{generatedText}</p></div>}
    </div>
  );
}
 
export default AIWriter;
 