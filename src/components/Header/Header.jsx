import { NavLink } from "react-router-dom";

export default function Header() {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/statistics'>Statistics</NavLink>
      </li>
      <li>
        <NavLink to='/jobs'>Jobs</NavLink>
      </li>
      <li tabIndex={0}>
      <details>
          <summary><NavLink to='/applied'>Applied Jobs</NavLink></summary>
          <ul className="p-2">
            <li>
              <NavLink to='/govt'>Govt</NavLink>
            </li>
            <li>
              <NavLink to='/private'>Private</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to='/blog'>Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <NavLink to='/'><a className=" font-bold text-2xl">CareerHub</a></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {/* <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li> */}
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn main-gradient text-white">Star Applying</a>
      </div>
    </div>
  );
}
