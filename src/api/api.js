import Axios from 'axios'

export const getAxiosInstanceJsonServer = () => {
  return Axios.create({
    baseURL: "https://messenger-backend2.iran.liara.run/",
    headers: {
      API_KEY: "lsdkljfalksfjasdfkjlasfjklasdkfjsadjf"
    }
  });
};

export const getAxiosInstanceAuth = () => {
  return Axios.create({
    baseURL: "https://messenger-backend2.iran.liara.run/api/",
  });
};

export const getAxiosInstanceApi = () => {
  return Axios.create({
    baseURL: "https://messenger-backend2.iran.liara.run/api/",
    headers: {
      'x-auth-token': localStorage.getItem("x-auth-token")
    }
  });

};

