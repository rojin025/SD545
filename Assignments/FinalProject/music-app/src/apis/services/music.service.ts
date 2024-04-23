import http from "../axios";

const accessToken = sessionStorage.getItem("accessToken");

export function getMusic(title: string, token: string | undefined) {
  try {
    const response = http.get(`/api/music?search=${title}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (e) {
    console.log("Error fetching music:", e);
    throw e;
  }
}
