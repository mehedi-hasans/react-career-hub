import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function ErrorPage() {
  return (
    <>
    <Header></Header>
    <div className="w-3/12 mx-auto my-48">
        <h1 className="text-2xl mb-5 font-bold">Oops Sorry, Page not found!!!</h1>
        <Link className="p-4 rounded-lg border block w-4/6 mx-auto text-center" to='/'>Go Back to Home</Link>
    </div>
    <Footer></Footer>
    </>
    
  )
}
