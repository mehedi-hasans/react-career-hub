import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
// eslint-disable-next-line react/prop-types
export default function Job({ job }) {
  // eslint-disable-next-line react/prop-types
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
        <figure>
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
            <button className="btn main-gradient font-semibold text-lg text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
