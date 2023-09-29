import { useEffect, useState } from "react";
import Job from "../Job/Job";


export default function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4)
  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);
  return (
    <div className="text-center">
      <h2 className="font-bold text-5xl">Featured Jobs {jobs.length}</h2>
      <p className="text-gray-700">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-16 grid-cols-1 my-11">
        {
            jobs.slice(0, dataLength).map( job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={dataLength === jobs.length && 'hidden'}>
        <button onClick={() => setDataLength(jobs.length)} className="btn main-gradient text-white my-10 mb-16">See All Jobs</button>
      </div>
    </div>
  );
}
