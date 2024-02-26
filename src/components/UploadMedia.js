// src/components/UploadMedia.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadMedia = () => {
  const signedURL = 'https://storage.googleapis.com/assets-fygito-dev/65b666c71acd8299a3af942f/65d45e8401341088a25b031e-travel6.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=backend-service%40phygital-dev-388705.iam.gserviceaccount.com%2F20240220%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240220T081044Z&X-Goog-Expires=3599&X-Goog-Signature=8f4ed6d0dda60f7b99648a4d6da4d041ffe9304f9237b527dbf0e0f60680e45602cb522d901e8f44c6f420acac02d2a946b558b4118316ca0fa709f9f63f43ec34267dc84b666f81519b6e8b41522de033d76636b3ef61e59c6edd1be519af5759fa5e8dc8cc719cca754248e922a5e1d6925e80cae45d367744caf14725acc73c720e5350e3d7646ea82febdec14099ff16d3c49d05f098623c490915621884f3cab8a053c992c0d679470c2ad854208f4b02f7692b959f4b0b6cdad24e74128d22975cfb3106f509e4942f2a41f912ea17a149289aab5670b7342e5d5dd445ba111437668994409985bc483257548a64e6a017419c3403468c3fc9601495bc&X-Goog-SignedHeaders=host'
  const [file, setFile] = useState(null);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    // Create FormData object to send files and other data
    const formData = new FormData();
    formData.append('file', file);
    console.log('file.type: ', file.type);

    try {
      const response = await axios.put(signedURL, file, {
        headers: {
          'Content-Type': file.type || 'image/jpeg',
        },
      });
      console.log('Upload successful!', response);
      // Handle success as needed
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <h1>Upload Media</h1>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Text 1" value={text1} onChange={(e) => setText1(e.target.value)} />
      <input type="text" placeholder="Text 2" value={text2} onChange={(e) => setText2(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UploadMedia;
