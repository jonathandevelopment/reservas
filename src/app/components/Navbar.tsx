// components/Navbar.js
const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-xl font-bold">
            Home
          </a>
  
          <div className="flex items-center">
            <a href="/account" className="text-white">
              Account
            </a>
            <img
              src="/userplaceholder.svg" // Replace with the actual path to the user's avatar image
              alt="User Avatar"
              className="w-8 h-8 rounded-full ml-2"
            />
            <span className="text-white ml-2">John Doe</span>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  