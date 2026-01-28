function Benefits() {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                padding: '5rem 2rem 3rem 2rem',
                textAlign: 'center',
                color: 'white'
            }}>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                }}>
                    Comprehensive Benefits
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    maxWidth: '900px',
                    margin: '0 auto',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    lineHeight: '1.6'
                }}>
                    We invest in our officers with competitive benefits that support you and your family both on and off duty.
                </p>
            </section>

            {/* Financial Benefits Section */}
            <section style={{
                padding: '4rem 2rem',
                background: 'linear-gradient(180deg, #f9fafb 0%, #e5e7eb 100%)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: '#1e3a8a',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                        letterSpacing: '1px'
                    }}>
                        Additional Pay & Incentives
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        textAlign: 'center',
                        marginBottom: '3rem',
                        color: '#4b5563',
                        maxWidth: '800px',
                        margin: '0 auto 3rem auto'
                    }}>
                        Earn additional compensation on top of your base salary
                    </p>

                    {/* Incentive Pay Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    }}>
                        {/* Shift Differential */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            border: '2px solid rgba(30, 58, 138, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.75rem',
                                color: '#1e3a8a'
                            }}>
                                Shift Differential
                            </h3>
                            <p style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: '#dc2626',
                                marginBottom: '0.5rem'
                            }}>
                                $150/month
                            </p>
                            <p style={{
                                color: '#4b5563',
                                lineHeight: '1.6'
                            }}>
                                For non-probationary officers working evening/night shifts (6 PM - 6 AM)
                            </p>
                        </div>

                        {/* Education Incentive */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            border: '2px solid rgba(30, 58, 138, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.75rem',
                                color: '#1e3a8a'
                            }}>
                                Education Pay
                            </h3>
                            <p style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: '#dc2626',
                                marginBottom: '0.5rem'
                            }}>
                                Up to $150/month
                            </p>
                            <p style={{
                                color: '#4b5563',
                                lineHeight: '1.6',
                                fontSize: '0.95rem'
                            }}>
                                • Associates: $50/month<br/>
                                • Bachelor's: $100/month<br/>
                                • Master's: $150/month
                            </p>
                        </div>

                        {/* Bilingual Pay */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            border: '2px solid rgba(30, 58, 138, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.75rem',
                                color: '#1e3a8a'
                            }}>
                                Bilingual Pay
                            </h3>
                            <p style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: '#dc2626',
                                marginBottom: '0.5rem'
                            }}>
                                $100/month
                            </p>
                            <p style={{
                                color: '#4b5563',
                                lineHeight: '1.6'
                            }}>
                                For certified Spanish or sign language officers assigned to the bilingual program
                            </p>
                        </div>

                        {/* Assignment Pay */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            border: '2px solid rgba(30, 58, 138, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.75rem',
                                color: '#1e3a8a'
                            }}>
                                Special Assignment Pay
                            </h3>
                            <p style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: '#dc2626',
                                marginBottom: '0.5rem'
                            }}>
                                Up to $150/month
                            </p>
                            <p style={{
                                color: '#4b5563',
                                lineHeight: '1.6',
                                fontSize: '0.95rem'
                            }}>
                                $75/month per assignment: SWAT, Drone Unit, FTO, Honor Guard, Instructor, Bike Patrol, and more
                            </p>
                        </div>

                        {/* Longevity Pay */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            border: '2px solid rgba(30, 58, 138, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.75rem',
                                color: '#1e3a8a'
                            }}>
                                Longevity Pay
                            </h3>
                            <p style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: '#dc2626',
                                marginBottom: '0.5rem'
                            }}>
                                $8-$12/month
                            </p>
                            <p style={{
                                color: '#4b5563',
                                lineHeight: '1.6',
                                fontSize: '0.95rem'
                            }}>
                                Calculated per month of service:<br/>
                                • 1-5 years: $8/month served<br/>
                                • 5-10 years: $10/month served<br/>
                                • 15-20+ years: $12/month served
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Benefits Section */}
            <section style={{
                padding: '4rem 2rem',
                background: 'linear-gradient(135deg, #0a1128 0%, #1e3a8a 20%, #dc2626 50%, #1e3a8a 80%, #0a1128 100%)',
                color: 'white'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                        letterSpacing: '1px'
                    }}>
                        Time Off & Work-Life Balance
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        textAlign: 'center',
                        marginBottom: '3rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        maxWidth: '800px',
                        margin: '0 auto 3rem auto'
                    }}>
                        We value your time with family and personal well-being
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div style={{
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <h3 style={{
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                15 Days
                            </h3>
                            <p style={{
                                fontSize: '1.25rem',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }}>
                                Paid Holidays<br/>(14 + 1 floating)
                            </p>
                        </div>

                        <div style={{
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <h3 style={{
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                80-160 Hours
                            </h3>
                            <p style={{
                                fontSize: '1.25rem',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }}>
                                Paid Vacation<br/>(Increases with tenure)
                            </p>
                        </div>

                        <div style={{
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <h3 style={{
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                120 Hours
                            </h3>
                            <p style={{
                                fontSize: '1.25rem',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }}>
                                Paid Sick Leave<br/>(Up to 720 hours)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Retirement & Insurance Section */}
            <section style={{
                padding: '4rem 2rem',
                background: 'linear-gradient(180deg, #f9fafb 0%, #e5e7eb 100%)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '3rem',
                        color: '#1e3a8a',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                        letterSpacing: '1px'
                    }}>
                        Retirement & Insurance
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        {/* TMRS Retirement */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            border: '2px solid rgba(30, 58, 138, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                color: '#1e3a8a'
                            }}>
                                Texas Municipal Retirement System (TMRS)
                            </h3>
                            <ul style={{
                                color: '#4b5563',
                                lineHeight: '2',
                                fontSize: '1.1rem',
                                listStyle: 'none',
                                padding: 0
                            }}>
                                <li style={{marginBottom: '0.75rem'}}>
                                    ✓ <strong>20-Year Retirement</strong>
                                </li>
                                <li style={{marginBottom: '0.75rem'}}>
                                    ✓ <strong>5-Year Vesting</strong>
                                </li>
                                <li style={{marginBottom: '0.75rem'}}>
                                    ✓ <strong>2:1 Match</strong> - City matches 14% to your 7%
                                </li>
                                <li style={{marginBottom: '0.75rem'}}>
                                    ✓ <strong>457B Plan</strong> - Voluntary additional retirement savings
                                </li>
                            </ul>
                        </div>

                        {/* Health & Wellness */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            border: '2px solid rgba(30, 58, 138, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                color: '#1e3a8a'
                            }}>
                                Health & Wellness
                            </h3>
                            <ul style={{
                                color: '#4b5563',
                                lineHeight: '2',
                                fontSize: '1.1rem',
                                listStyle: 'none',
                                padding: 0
                            }}>
                                <li style={{marginBottom: '0.75rem'}}>
                                    ✓ <strong>Medical Coverage</strong> - Comprehensive health insurance
                                </li>
                                <li style={{marginBottom: '0.75rem'}}>
                                    ✓ <strong>Dental Coverage</strong>
                                </li>
                                <li style={{marginBottom: '0.75rem'}}>
                                    ✓ <strong>Life Insurance</strong> - City-paid with voluntary options
                                </li>
                                <li style={{marginBottom: '0.75rem'}}>
                                    ✓ <strong>On-Site Gym</strong>
                                </li>
                                <li style={{marginBottom: '0.75rem'}}>
                                    ✓ <strong>Wellness Program</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Perks Section */}
            <section style={{
                padding: '4rem 2rem 6rem 2rem',
                color: 'white'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '3rem',
                        textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                        letterSpacing: '1px'
                    }}>
                        Additional Perks
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '2px solid rgba(255,255,255,0.2)',
                            textAlign: 'center',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                Take-Home Vehicle
                            </h3>
                            <p style={{
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }}>
                                After field training completion
                            </p>
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '2px solid rgba(255,255,255,0.2)',
                            textAlign: 'center',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                Uniforms Provided
                            </h3>
                            <p style={{
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }}>
                                All uniforms and equipment provided
                            </p>
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '2px solid rgba(255,255,255,0.2)',
                            textAlign: 'center',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                Tuition Reimbursement
                            </h3>
                            <p style={{
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }}>
                                Continue your education with support
                            </p>
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '2px solid rgba(255,255,255,0.2)',
                            textAlign: 'center',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                Employee Assistance
                            </h3>
                            <p style={{
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }}>
                                Support services for you and family
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Benefits