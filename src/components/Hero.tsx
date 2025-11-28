import React from 'react';

const Hero = ({ dict }: { dict: any }) => {
    return (
        <section className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

            {/* Background Glow Effects */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(0, 243, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(188, 19, 254, 0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%' }}>

                {/* Left Content */}
                <div style={{ zIndex: 1 }}>
                    <div className="glass-panel" style={{ padding: '0.5rem 1rem', display: 'inline-block', marginBottom: '1.5rem' }}>
                        <span className="gradient-text" style={{ fontWeight: 600, letterSpacing: '1px' }}>{dict.hero.subtitle}</span>
                    </div>

                    <h1 style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        {dict.hero.title_part1} <span className="gradient-text">+</span> {dict.hero.title_part2} <br />
                        <span style={{ fontSize: '3.5rem', opacity: 0.8 }}>{dict.hero.title_part3}</span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: '#888', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: 1.6 }}>
                        {dict.hero.description}
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button className="btn-primary">
                            {dict.hero.explore}
                        </button>
                        {/* <button style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#fff', 
              fontSize: '1rem', 
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '4px'
            }}>
              {dict.hero.watch}
            </button> */}
                    </div>
                </div>

                {/* Right Visual */}
                <div className="flex-center animate-float" style={{ position: 'relative' }}>
                    <div className="glass-panel" style={{
                        width: '400px',
                        height: '500px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {/* Abstract Bot Representation */}
                        <div className="animate-glow" style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            marginBottom: '2rem',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                inset: '2px',
                                background: '#050505',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                                    opacity: 0.5
                                }} />
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{dict.hero.neural_core}</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>{dict.hero.status}: <span style={{ color: '#0f0' }}>{dict.hero.online}</span></p>
                        </div>

                        {/* Floating Elements */}
                        <div className="glass-panel" style={{
                            position: 'absolute',
                            top: '20%',
                            right: '-10%',
                            padding: '1rem',
                            width: '140px'
                        }}>
                            <div style={{ height: '4px', width: '100%', background: '#333', borderRadius: '2px', marginBottom: '8px' }}>
                                <div style={{ height: '100%', width: '70%', background: 'var(--primary)', borderRadius: '2px' }} />
                            </div>
                            <p style={{ fontSize: '0.7rem', color: '#888' }}>{dict.hero.processing}</p>
                        </div>

                        <div className="glass-panel" style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '-10%',
                            padding: '1rem',
                            width: '140px'
                        }}>
                            <p style={{ fontSize: '0.7rem', color: '#888', marginBottom: '4px' }}>{dict.hero.efficiency}</p>
                            <h4 style={{ color: 'var(--secondary)' }}>98.4%</h4>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
