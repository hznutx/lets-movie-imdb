import axios from "axios";
import moment from "moment";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
  },
});

export async function fetchAndSaveData() {
  try {
    const response = await api.get("/");
    const data = response.data;

    localStorage.setItem("apiData", JSON.stringify(data));
    console.log("Data fetched and saved successfully.");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export function getStoredData() {
  const storedData = localStorage.getItem("apiData");

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    return parsedData;
  }

  return null;
}

export function calculateNextFetchTime() {
  const lastFetchTime = localStorage.getItem("lastFetchTime");
  if (!lastFetchTime) {
    const nextFetchTime = moment().add(24, "hours");
    localStorage.setItem("lastFetchTime", nextFetchTime.toISOString());
    return 24 * 60 * 60 * 1000; 
  } else {
    const currentTime = moment();
    const nextFetchTime = moment(lastFetchTime).add(24, "hours");
    const timeUntilNextDay = nextFetchTime.diff(currentTime);
    return timeUntilNextDay;
  }
}
