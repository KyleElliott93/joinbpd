function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '2rem',
                color: 'white',
                position: 'relative'
            }}>
                <h1 style={{
                    fontSize: '5rem',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                    letterSpacing: '2px'
                }}>
                    SERVE. PROTECT. LEAD.
                </h1>
                <p style={{
                    fontSize: '1.75rem',
                    marginBottom: '3rem',
                    maxWidth: '900px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    lineHeight: '1.6'
                }}>
                    Make a difference in the Buda community.
                </p>
                <div style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <button style={{
                        background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                        color: 'white',
                        padding: '1.25rem 3rem',
                        borderRadius: '8px',
                        border: '2px solid rgba(255,255,255,0.5)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(220, 38, 38, 0.6)',
                        transition: 'all 0.3s',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }} className="hero-btn-red">
                        Start Your Career
                    </button>
                    <button style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                        color: 'white',
                        padding: '1.25rem 3rem',
                        borderRadius: '8px',
                        border: '2px solid rgba(255,255,255,0.7)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(255,255,255,0.2)',
                        transition: 'all 0.3s',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }} className="hero-btn-outline">
                        Learn More
                    </button>
                </div>
            </section>

            {/* Hiring Bonuses Banner with Gradient */}
            <section style={{
                background: 'linear-gradient(135deg, #0a1128 0%, #1e3a8a 20%, #dc2626 50%, #1e3a8a 80%, #0a1128 100%)',
                padding: '3rem 2rem',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                position: 'relative',
                borderTop: '3px solid rgba(255,255,255,0.3)',
                borderBottom: '3px solid rgba(255,255,255,0.3)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '3rem'
                }}>
                    <div style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}>
                        <h3 style={{
                            fontSize: '4rem',
                            fontWeight: 'bold',
                            marginBottom: '0.5rem',
                            textShadow: '3px 3px 6px rgba(0,0,0,0.7)'
                        }}>
                            $XX,XXX
                        </h3>
                        <p style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>Sign-On Bonus</p>
                    </div>
                    <div style={{
                        width: '3px',
                        height: '100px',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)'
                    }}></div>
                    <div style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}>
                        <h3 style={{
                            fontSize: '4rem',
                            fontWeight: 'bold',
                            marginBottom: '0.5rem',
                            textShadow: '3px 3px 6px rgba(0,0,0,0.7)'
                        }}>
                            $X,XXX
                        </h3>
                        <p style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>Relocation Assistance</p>
                    </div>
                    <div style={{
                        width: '3px',
                        height: '100px',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)'
                    }}></div>
                    <div style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}>
                        <h3 style={{
                            fontSize: '4rem',
                            fontWeight: 'bold',
                            marginBottom: '0.5rem',
                            textShadow: '3px 3px 6px rgba(0,0,0,0.7)'
                        }}>
                            $69,373+
                        </h3>
                        <p style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>Starting Salary</p>
                    </div>
                </div>
            </section>

            {/* Why Buda PD Section */}
            <section style={{
                padding: '5rem 2rem',
                background: 'linear-gradient(180deg, #f9fafb 0%, #e5e7eb 100%)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                        color: '#1e3a8a',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                        letterSpacing: '1px'
                    }}>
                        Why Choose Buda PD?
                    </h2>
                    <p style={{
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        color: '#4b5563',
                        maxWidth: '900px',
                        margin: '0 auto 4rem auto',
                        lineHeight: '1.7'
                    }}>
                        Join a department that invests in your success and provides the tools, training, and support to build a rewarding career in law enforcement.
                    </p>

                    {/* Cards Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '2.5rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {/* Card 1 - Competitive Pay */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            border: '2px solid rgba(30, 58, 138, 0.1)'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                color: '#1e3a8a'
                            }}>
                                Competitive Pay
                            </h3>
                            <p style={{
                                color: '#4b5563',
                                lineHeight: '1.7',
                                fontSize: '1.1rem'
                            }}>
                                Starting salary with annual increases, lateral entry pay, and additional incentives to recognize your experience and dedication.
                            </p>
                        </div>

                        {/* Card 2 - Benefits */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            border: '2px solid rgba(30, 58, 138, 0.1)'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                color: '#1e3a8a'
                            }}>
                                Excellent Benefits
                            </h3>
                            <p style={{
                                color: '#4b5563',
                                lineHeight: '1.7',
                                fontSize: '1.1rem'
                            }}>
                                Comprehensive health insurance, retirement plans, paid time off, and additional perks for you and your family.
                            </p>
                        </div>

                        {/* Card 3 - Take Home Vehicle */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            border: '2px solid rgba(30, 58, 138, 0.1)'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                color: '#1e3a8a'
                            }}>
                                Take Home Vehicle
                            </h3>
                            <p style={{
                                color: '#4b5563',
                                lineHeight: '1.7',
                                fontSize: '1.1rem'
                            }}>
                                Take home vehicle available after the completion of field training.
                            </p>
                        </div>

                        {/* Card 4 - Community */}
                        <div style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            border: '2px solid rgba(30, 58, 138, 0.1)'
                        }} className="feature-card-gradient">
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                color: '#1e3a8a'
                            }}>
                                Thriving Community
                            </h3>
                            <p style={{
                                color: '#4b5563',
                                lineHeight: '1.7',
                                fontSize: '1.1rem'
                            }}>
                                Serve one of the fastest-growing cities in Central Texas with a supportive community that values public safety.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home