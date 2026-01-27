import Job from "../models/job.js";

export const createJob = async (req ,res) =>{
    try{
        const job = await Job.create({
            ...req.body,
            createdBy : req.user.id,
        });

        res.status(201).json(job);
    }catch(error){
        res.status(500).json({message: "Failed to create a job"});
    };
};


export const getAllJobs = async (req,res)=>{
    try{
        const jobs = await Job.find().populate("CreatedBy", "name email");
        res.json(jobs);
    }catch(error){
        res.status(500).json({message : "Failed to fetch Jobs"});
    };
};