import http from "../httpService";
import { apiUrl } from "../../config/config.json";

const apiEndpoint = apiUrl + "/vehicles";

export function getVehicles() {
  return http.get(apiEndpoint);
}
