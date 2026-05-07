import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  return (
    <div>Home
        <p> Lorem tgfsh hjgsdf hjgf jhgwfsd hjgas hjasf hgs hjga jh uyfk fhas hvas</p>
        <button onClick={()=>navigate('/Contact')}>Enquire/customer support</button>
    </div>
  )
}

export default Home