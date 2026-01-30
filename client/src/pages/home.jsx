import { useEffect, useState } from "react";
import {useAuth} from "../context/authContext";
import { fetchJobs } from "../services/jobApi";

const Jobs = () => {
    const[jobs, setJobs] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetchJobs().then(data => {
            setJobs(data)
        })
    }, []);

    return(<>
        <h1 className="flex justify-center font-semibold mb-2 text-4xl">Welcome , {user.name}</h1>
        <div className="max-w-6xl mx-auto p-4 grid gap-4 ">
            {jobs.length === 0 ? (
                <p className="text-center text-2xl mt-5 text-gray-500">No Jobs available</p>
            ):
            (jobs.map((job)=>(
                <div key={job._id} className="border p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-gray-600">{job.company} - {job.location}</p>
                    <p className="text-gray-600">{job.salary}</p>
                    <p className="text-gray-600 mt-2">{job.description.slice(0,120)}...</p>
                </div>
            )))}
        </div>
        </>
    );
};

export default Jobs;