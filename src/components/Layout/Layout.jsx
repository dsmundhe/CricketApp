import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Turnaments from '../Tournament/Turnaments'
import Profile from '../Profile/Profile'
import Contact from '../Contact/Contact';
import Registration from '../Registration/Registration'
import Matches from '../Matches/Matches'
import Login from '../Login/Login'

function Layout() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/matches' element={<Matches />} />
                    <Route path='/turnaments' element={<Turnaments/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/registor' element={<Registration/>} />
                    <Route path='/login' element={<Login/>} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
