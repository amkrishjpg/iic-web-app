import API from "./api";

export const generateReport = (data) => API.post("/report", data);
