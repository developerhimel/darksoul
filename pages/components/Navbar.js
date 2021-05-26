import MobileMenu from "./MobileMenu";
export default function Navbar() {
  return (
    <>
      <nav className="container-fluid shadow-lg px-3 sm:px-0 hidden lg:block bg-gray-900">
        <div className="container mx-auto nav_wrapper">
          <div className="nav_logo">
              <a href="./">
                <img
                  className="w-10 lg:w-auto"
                  src="./images/logo/logo.png"
                  alt=""
                />
              </a>
          </div>
          <div className="nav_content hidden lg:block">
            <ul>
              <li className="hover:text-blue-500 hover:animate-bounce cursor-pointer text-gray-200">
                <a href="./">Home</a>
              </li>
              <li className="hover:text-blue-500 hover:animate-bounce cursor-pointer text-gray-200">
                <a href="./">Features</a>
              </li>
              <li className="hover:text-blue-500 hover:animate-bounce cursor-pointer text-gray-200">
                <a href="./">Latest Events</a>
              </li>
              <li className="hover:text-blue-500 hover:animate-bounce cursor-pointer text-gray-200">
                <a href="./">Guild Members</a>
              </li>
              <li className="hover:text-blue-500 hover:animate-bounce cursor-pointer text-gray-200">
                <a href="./">Guild Info</a>
              </li>
              <li className="relative inline-flex px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-white bg-white hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition ease-in-out duration-150">
                <a href="./login">Member Login</a>
                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MobileMenu />
    </>
  );
}
