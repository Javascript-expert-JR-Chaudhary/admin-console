import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSection from './pages/navbar'
import MainLayout from './pages/mainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='admin-app'>
      <HeaderSection></HeaderSection>
      <MainLayout></MainLayout>
    </div>
  )
}

export default App
