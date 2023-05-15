import axios from "axios"; 
export const exerciseOptions = {
  method:'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': "892e1c60b0mshe837ff669557f5ap10e459jsnd3e207b70ddf",
  },
};

export const youtubeOptions = {
 method:"GET",
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '892e1c60b0mshe837ff669557f5ap10e459jsnd3e207b70ddf',
  },
};

export const fetchData = async (url, options) => {
  const res = await axios({url, ...options});
  const data =res.data;
  console.log(data);
  return data;
};
