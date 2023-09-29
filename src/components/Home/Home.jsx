import Banner from "../Banner/Banner";
import FeaturedJobs from "../Featured Jobs/FeaturedJobs";
import JobCategory from "../Job Category/JobCategory";

export default function Home() {
  return (
    <div>
        <Banner/>
        <JobCategory/>
        <FeaturedJobs/>
    </div>
  )
}
