import http from "../axios";

export function getUsers() {
  return http.get("/search/users?q=");
}
