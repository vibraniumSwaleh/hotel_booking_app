import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AccountPage() {
  const { ready, user } = useContext(UserContext);
  let { subpage } = useParams();

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
    }
    
    if (subpage === undefined) {
        subpage = "profile";
    }

    function linkClasses(type=null) {
        let classes = "py-2 px-6";
        if (type === subpage) {
            classes += " bg-primary text-white rounded-full";
        }
        return classes;
    }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-4">
        <Link className={linkClasses("profile")} to={"/account"}>My profile</Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>My bookings</Link>
        <Link className={linkClasses("places")} to={"/account/places"}>My accomodations</Link>
      </nav>
    </div>
  );
}
