import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import navicon from "../../Images/icons8-open-book-64.png";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [enabled, setEnabled] = useState(false);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  const handleLogout = () => {
    logout();
    console.log("user logged out");
  };
  return (
    <div>
      <div class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div class='relative flex items-center justify-between'>
          <Link
            to='/'
            aria-label='Bookify'
            title='Bookify'
            class='inline-flex items-center'>
            <img className='w-10 h-15' src={navicon} alt=''></img>

            <span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              Bookify
            </span>
          </Link>
          <ul class='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Link to='/blogs' className='font-semibold'>
                Blogs
              </Link>
            </li>

            {user?.uid ? (
              <>
                <li>
                  <Link to='/dashboard' className='font-semibold'>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button className='font-semibold' onClick={handleLogout}>
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to='/signup'
                    class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                    aria-label='Sign up'
                    title='Sign up'>
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    to='/signin'
                    class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                    aria-label='Sign up'
                    title='Sign up'>
                    Sign in
                  </Link>
                </li>
              </>
            )}
            {/* 
            {isBuyer && (
              <>
                <li>
                  <Link to='/dashboard/myorders'>Dashboard</Link>
                </li>
              </>
            )}
            {isBuyer && (
              <>
                <li>
                  <Link to='/dashboard/myproducts'>Dashboard</Link>
                </li>
              </>
            )} */}

            {/* <li>
              <Link
                to='/'
                onClick={handleLogout}
                aria-label='Our product'
                title='Our product'
                class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                Log out
              </Link>
            </li> */}
          </ul>
          <div class='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              class='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}>
              <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class='absolute z-20 top-0 left-0 w-full'>
                <div class='p-5 bg-white border rounded shadow-sm'>
                  <div class='flex items-center justify-between mb-4'>
                    <div>
                      <Link
                        to='/'
                        aria-label='Company'
                        title='Company'
                        class='inline-flex items-center'>
                        <img className='w-10 h-15' src={navicon} alt=''></img>
                        <span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          Bookify
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        class='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}>
                        <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class='space-y-4'>
                      <li>
                        <Link
                          to='/dashboard'
                          aria-label='Our product'
                          title='Our product'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blogs'
                          aria-label='Our product'
                          title='Our product'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          Blogs
                        </Link>
                      </li>
                      {user ? (
                        <>
                          {" "}
                          <Link
                            onClick={handleLogout}
                            to='/'
                            class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                            aria-label='Log out'
                            title='Log out'>
                            Log out
                          </Link>
                        </>
                      ) : (
                        <>
                          {" "}
                          <li>
                            <Link
                              to='/signup'
                              class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-gray-800 hover:bg-gray-900 transition duration-200 rounded shadow-md bg focus:shadow-outline focus:outline-none'
                              aria-label='Sign up'
                              title='Sign up'>
                              Sign up
                            </Link>
                          </li>
                          <li>
                            <Link
                              to='/signin'
                              class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-blue-700 hover:bg-blue-800 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                              aria-label='Sign in'
                              title='Sign in'>
                              Sign in
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
