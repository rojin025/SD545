import axios from "axios";
import http from "../axios";

const getMusics = () => {
  return http.get("/api/music");
};

const getMusic = (title: string) => {
  return http.get(`/api/music?search=${title}`);
};

export default {
  getMusics,
  getMusic,
};
