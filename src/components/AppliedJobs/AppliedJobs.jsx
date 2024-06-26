import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { getStoredJobApplication } from "../../utility/localstorage"


const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([])
  const jobs = useLoaderData()
  useEffect(()=>{
    const storedJobIds = getStoredJobApplication();
    if(jobs.length > 0){
      const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
      setAppliedJobs(jobApplied)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>Applied Jobs section {appliedJobs.length}</div>
  )
};

export default AppliedJobs;

