import React from 'react';
import { getDictionary } from '@/dictionaries/get-dictionary';

export default async function Careers({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                    {dict.careers.title}
                </h1>
                <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
                    {dict.careers.subtitle}
                </p>

                {/* Values Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
                    <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{dict.careers.value1_title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{dict.careers.value1_desc}</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <h3 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>{dict.careers.value2_title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{dict.careers.value2_desc}</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <h3 style={{ color: 'var(--foreground)', marginBottom: '0.5rem' }}>{dict.careers.value3_title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{dict.careers.value3_desc}</p>
                    </div>
                </div>

                {/* No Openings Message */}
                <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem auto'
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    </div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{dict.careers.no_openings_title}</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto' }}>
                        {dict.careers.no_openings_desc}
                    </p>
                </div>
            </div>
        </main>
    );
}
