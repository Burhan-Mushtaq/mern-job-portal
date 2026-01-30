import { useState } from "react";
import API from "../services/api";


const CreateJob = () => {
    const[form , setForm] = useState({
        title: "",
        company: "",
        location: "",
        jobtype: "",
        salary: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/jobs", form);
        alert("Job created successfully");
    };

    return (
        <>
        <h2 className="flex justify-center mb-2 font-semibold text-2xl">Create Job Page</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-3">
            <input name="title" placeholder="Job Title" onChange={handleChange} className="input" />
            <input name="company" placeholder="Company" onChange={handleChange} className="input" />
            <input name="location" placeholder="Location" onChange={handleChange} className="input" />

            <select name="jobtype" onChange={handleChange} className="input">
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
            </select>

            <input name="salary" placeholder="Salary (optional)" onChange={handleChange} className="input" />

            <textarea name="description" 
                placeholder="Job Description"
                rows="4"
                onChange={handleChange}
                className="input"/>
            
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Create Job
            </button>
        </form>
        </>
    )
}

export default CreateJob;