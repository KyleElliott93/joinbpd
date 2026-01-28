import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Salary from './pages/Salary'
import Benefits from './pages/Benefits'
import Apply from './pages/Apply'

function App() {
    return (
        <BrowserRouter>
            <div style={{
                background: 'radial-gradient(ellipse at center, #1e3a8a 20%, #0a1128 100%)',
                minHeight: '100vh',
                width: '100%',
                margin: 0,
                padding: 0
            }}>
                {/* Navigation */}
                <nav style={{
                    background: 'linear-gradient(135deg, #0a1128 0%, #1e3a8a 50%, #0a1128 100%)',
                    padding: '1.5rem 3rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    borderBottom: '2px solid #dc2626'
                }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                border: '3px solid rgba(255,255,255,0.3)',
                                boxShadow: '0 4px 16px rgba(220, 38, 38, 0.5)'
                            }}>
                                BPD
                            </div>
                            <span style={{
                                fontSize: '1.75rem',
                                fontWeight: 'bold',
                                color: 'white',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
        Buda Police Department
      </span>
                        </div>
                    </Link>

                    <div style={{
                        display: 'flex',
                        gap: '2.5rem',
                        alignItems: 'center'
                    }}>
                        <Link to="/" style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '1.25rem',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                        }} className="nav-link-gradient">
                            Home
                        </Link>
                        <Link to="/salary" style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '1.25rem',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                        }} className="nav-link-gradient">
                            Salary
                        </Link>
                        <Link to="/benefits" style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '1.25rem',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                        }} className="nav-link-gradient">
                            Benefits
                        </Link>
                        <Link to="/apply">
                            <button style={{
                                background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                                color: 'white',
                                padding: '1rem 3rem',
                                borderRadius: '8px',
                                border: '2px solid rgba(255,255,255,0.5)',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '0 4px 16px rgba(220, 38, 38, 0.6)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                transition: 'all 0.3s',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }} className="apply-btn-gradient">
                                APPLY NOW
                            </button>
                        </Link>
                    </div>
                </nav>

                {/* Page Content */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/salary" element={<Salary />} />
                    <Route path="/benefits" element={<Benefits />} />
                    <Route path="/apply" element={<Apply />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App


