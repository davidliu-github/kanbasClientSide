import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaWrench, FaStar, FaQuestionCircle} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-4 " />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-4" />  },
    { label: "Courses",   icon: <FaBook className="fs-4" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-4" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-4" /> },
    { label: "History",  icon: <FaClock className="fs-4" /> },
    { label: "Studio",  icon: <FaWrench className="fs-4" /> },
    { label: "Commons",  icon: <FaStar className="fs-4" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-4" /> }
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
        <li className="pt-4"><a href="http://northeastern.edu">N</a></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label === "Courses" ? "Courses/RS101" : link.label}`}> <div>{link.icon}</div> {link.label} </Link>
        
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;