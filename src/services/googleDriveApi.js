import { gapi } from 'gapi-script';
import { useEffect } from 'react';

const CLIENT_ID = '258675597339-bv03vcuto5bocfop3bd9g1e2ar9e5v7g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBz6-pMg07Bvz0cQtd7MLuuLvVA2552yKA';
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

export const useGoogleDriveAPI = () => {
    useEffect(() => {
      function start() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
          scope: 'https://www.googleapis.com/auth/drive.file',
        }).then(() => {
          console.log('Google API initialized');
        }).catch((error) => {
          console.error('Error initializing Google API', error);
        });
      }
  
      gapi.load('client:auth2', start);
    }, []);
  };

export const signInWithGoogle = () => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({
        client_id: CLIENT_ID,
      }).then(() => {
        gapi.auth2.getAuthInstance().signIn();
      }).catch((error) => {
        console.error('Google Auth Initialization failed', error);
      });
    });
  };

export const uploadFileToDrive = (file) => {
  const fileMetadata = {
    name: file.name,
  };
  const media = {
    mimeType: file.type,
    body: file,
  };
  gapi.client.drive.files
    .create({
      resource: fileMetadata,
      media: media,
      fields: 'id',
    })
    .then((response) => {
      console.log('File uploaded. File ID: ', response.result.id);
    });
};
