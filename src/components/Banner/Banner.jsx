
export default function Banner() {
  return (
    <div className="text-center grid gap-5 grid-cols-1 md:grid-cols-2">
        <div className="space-y-3 text-left my-20">
          <h1 className="md:text-7xl text-5xl font-bold ">One Step01 <br/> Closer To Your <br/> <span className="text-sky-500">Dream Job</span></h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="btn main-gradient py-2 px-5 text-white">Get Started</button>
        </div>
        <div className="mt-10">
          <img className="w-full" src="https://i.ibb.co/2vTHprB/corporate-group.png" alt="" />
        </div>
    </div>
  )
}
