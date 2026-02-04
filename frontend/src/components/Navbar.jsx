import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Product Manager
          </Link>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Upload
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
