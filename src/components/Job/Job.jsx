/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function Job({ job }) {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl p-6">
        <figure className="h-[100px] w-2/5">
          <img src={logo} alt="logo" />
        </figure>
        <div className="card-body text-left gap-3">
          <h2 className="font-bold text-2xl text-gray-800">{job_title}</h2>
          <p className="font-semibold text-lg text-gray-700">{company_name}</p>
          <div className="space-x-3">
            <button className="border-[#7E90FE] border px-5 py-2 rounded font-bold text-base text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="border-[#7E90FE] border px-5 py-2 rounded font-bold text-base text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-4 text-lg font-semibold text-gray-700">
            <span className="flex items-center gap-1">
              <IoLocationOutline></IoLocationOutline> {location}
            </span>

            <span className="flex items-center gap-1">
              <span>
                <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
              </span>
              <span>{salary}</span>
            </span>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
            <button className="btn main-gradient font-semibold text-lg text-white">
              View Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
