import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { AiOutlineLoading } from 'react-icons/ai';

import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Report = ({data1,data2}) => {
  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) return <Navigate to="/login" />;

  // get the user data from the server
  const { loading, data } = useQuery(QUERY_USERS);

  // set the user data to a variable
  const users = data?.users || [];




  return (
    <section
      id="leaderboard"
      className="w-full min-h-screen p-4 md:p-8"
    >
      {/* Page Heading */}
      <h1 className="h1-style mb-8">Report</h1>

      {/* Banner */}
      <div className="mb-8 banner-container-style text-white text-shadow bg-gradient-to-r from-green-600 to-green-800">
        <div className="relative p-8 z-10">
          <h2 className="banner-heading mb-3">Your Health..</h2>
          <p className="text-lg">Be the best.</p>
        </div>
        <div className="banner-bg-style bg-connections" />
      </div>

      {/* Leaderboard table */}
      <div className="box-container-style">
        <h2 className="text-xl font-bold mb-4">Analytics</h2>
        <div className="flex flex-col">
          {/* {loading && <AiOutlineLoading className="animate-spin h-12 w-12 mx-auto" />} */}
          <div>
            <p>{data1}</p>
            {data2.map((value, index) => (                         
              <p key={index}>{value} </p>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Report;
