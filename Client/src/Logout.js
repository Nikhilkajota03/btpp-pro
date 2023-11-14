import React from 'react'
import {useNavigate} from 'react-router-dom'



const Logout = () => {

  const navigate = useNavigate();


  return (
    <div>
          <button

        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");

        }}

        className="text-white absolute left-4 top-20 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800"
      >
        Logout
      </button>
    </div>
  )
}

export default Logout
