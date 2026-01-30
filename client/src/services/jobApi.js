import API from "./api";

export const fetchJobs = async () => {
    const res = await API.get("/jobs");
    return res.data;
}