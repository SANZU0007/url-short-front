import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const URLShortener =  () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShorten = async () => {
    try {
      const apiKey = '93593f45d712e24650db522fc102898fc8342f0f';
      const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;
      const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      };
      const data = {
        long_url: originalUrl,
      };

      const   response = await axios.post(apiUrl, data, { headers });
      setShortenedUrl(response.data.link);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">URL Shortener</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter the URL to shorten"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleShorten}>
        Shorten
      </Button>
      {shortenedUrl && (
        <div>
          <Typography variant="subtitle1">Shortened URL:</Typography>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default URLShortener;
