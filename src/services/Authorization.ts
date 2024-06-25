import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const SpotifyAuth = async () => {
  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  const tokenUrl = 'https://accounts.spotify.com/api/token';

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
  };

  const data = 'grant_type=client_credentials';
  const response = await axios.post(tokenUrl, data, { headers });

  return response.data.access_token;
};

export const useSpotifyAuth = () => {
  return useMutation({
    mutationFn: SpotifyAuth,
    onSuccess: (data) => {
      localStorage.setItem('spotify_token', data);
    },
  });
};
