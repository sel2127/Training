import { Routes, Route } from 'react-router-dom'
import UploadPage from './pages/UploadPage'
import ProductsList from './pages/ProductsList'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/products" element={<ProductsList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
