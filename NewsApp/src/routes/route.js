// const axios = require("axios");

import axios from "axios";

const url = "http://localhost:8000";

export const getGeneral = async () => {
  try {
    // console.log("start");
    const data = await axios.get(`${url}/general`);
    // console.log("end");
    // console.log(data);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getBusiness = async () => {
  try {
    const data = await axios.get(`${url}/business`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getEntertainement = async () => {
  try {
    const data = await axios.get(`${url}/entertainment`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getHealth = async () => {
  try {
    const data = await axios.get(`${url}/health`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSports = async () => {
  try {
    const data = await axios.get(`${url}/sports`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getScience = async () => {
  try {
    const data = await axios.get(`${url}/science`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getTechnology = async () => {
  try {
    const data = await axios.get(`${url}/technology`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// module.exports = {
//   getGeneral,
//   getBusiness,
//   getEntertainement,
//   getHealth,
//   getSports,
//   getScience,
//   getTechnology,
// };
