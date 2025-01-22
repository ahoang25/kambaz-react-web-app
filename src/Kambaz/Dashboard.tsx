import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS3650.jpg" width={200} />
            <div>
              <h5> CS3650 </h5>
              <p className="wd-dashboard-course-title">
                Computer Systems  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS4550.jpg" width={200} />
            <div>
              <h5> CS4550 </h5>
              <p className="wd-dashboard-course-title">
                Web Development  </p>
              <button> Go </button>
            </div>
          </Link>
             </div>

             <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS4400.jpg" width={200} />
            <div>
              <h5> CS4400 </h5>
              <p className="wd-dashboard-course-title">
                Programming Languages  </p>
              <button> Go </button>
            </div>
          </Link>
             </div>

             <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS3700.jpg" width={200} />
            <div>
              <h5> CS3700 </h5>
              <p className="wd-dashboard-course-title">
                Networks and Distributed Systems  </p>
              <button> Go </button>
            </div>
          </Link>
             </div>

             <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS3800.jpg" width={200} />
            <div>
              <h5> CS3800 </h5>
              <p className="wd-dashboard-course-title">
                Theory and Computation </p>
              <button> Go </button>
            </div>
          </Link>
             </div>

             <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS3520.jpg" width={200} />
            <div>
              <h5> CS3520 </h5>
              <p className="wd-dashboard-course-title">
                Programming in C++  </p>
              <button> Go </button>
            </div>
          </Link>
             </div>

             <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS4530.jpg" width={200} />
            <div>
              <h5> CS4530 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Software Engineering  </p>
              <button> Go </button>
            </div>
          </Link>
             </div>

      </div>
    </div>
);}
