import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";
export default function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const notify = () => {
    saveJobApplication(idInt)
    toast("You have applied successfully!");
  }
  return (
    <div className="my-20">
      <div className="p-7 rounded-lg border mb-4">
        <h1 className="font-bold text-lg "><span className="text-sky-600">Job Details of:</span> {job.job_title}</h1>
        <h3 className=" font-semibold text-gray-700">{job.company_name}</h3>
      </div>
      <div className="grid gap-4 grid-cols-3">
        <div className="border col-span-2 space-y-6 rounded-lg p-7">
          <p className="font-bold">
            Job Description:{" "}
            <span className="font-normal text-gray-700">
              {job.job_description}
            </span>
          </p>
          <p className="font-bold">
            Job Responsibility:{" "}
            <span className="font-normal text-gray-700">
              {job.job_responsibility}
            </span>
          </p>
          <p className="font-bold">
            Education Requirements:{" "}
            <span className="font-normal text-gray-700">
              {job.educational_requirements}
            </span>
          </p>
          <p className="font-bold">
            Experiences:{" "}
            <span className="font-normal text-gray-700">{job.experiences}</span>
          </p>
        </div>

        <div>
        <div className="border rounded-lg bg-gray-100 p-7 ">
          <div className="space-y-2">
            <h3 className="font-bold pb-2 mb-2 border-b ">Job Details</h3>
            <p className="flex items-center gap-1">
              <span className="text-sky-600 text-xl">
                <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
              </span>
              <span className="font-semibold">Salary:</span>
              <span>{job.salary}</span>
            </p>
            <p className="flex items-center gap-1">
              <span className="text-sky-600 text-xl">
                <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
              </span>
              <span className="font-semibold">Job Title: </span>
              {job.job_title}
            </p>
          </div>

          <div className="mt-5 space-y-2">
            <h3 className="font-bold pb-2 mb-2 border-b">
              Contact Information
            </h3>
            <p className="flex items-center gap-1">
              <span className="text-sky-600 text-xl">
                <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
              </span>
              <span className="font-semibold">Phone:</span>
              <span>{job.contact_information.phone}</span>
            </p>
            <p className="flex items-center gap-1">
              <span className="text-sky-600 text-xl">
                <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
              </span>
              <span className="font-semibold">Email:</span>
              <span>{job.contact_information.email}</span>
            </p>

            <p className="flex items-center gap-1">
              <span className="text-sky-600 text-xl">
                <IoLocationOutline></IoLocationOutline>
              </span>
              <span className="font-semibold">Address:</span>
              <span>{job.contact_information.address}</span>
            </p>
          </div>
        </div>
          <button onClick={notify} className="btn main-gradient mt-4 w-full rounded-lg py-2 text-white font-medium text-xl">Apply Now</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
