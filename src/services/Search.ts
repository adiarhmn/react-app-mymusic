import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getSearch = async () => {
  const token = localStorage.getItem('spotify_token');

  console.log('TOKEN ==>', token);
  const search = 'https://api.spotify.com/v1/search?q=metallica$&type=artist';
  const headers = {
    Authorization: 'Bearer ' + token,
  };
  const response = await axios.get(search, { headers });
  return response.data;
};

export const useSearch = (search?: string) => {
  return useQuery({
    queryKey: ['search', search],
    queryFn: () => getSearch(),
  });
};
