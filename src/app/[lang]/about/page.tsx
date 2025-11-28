import React from 'react';
import { getDictionary } from '@/dictionaries/get-dictionary';

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem' }}>
                    {dict.about.title}
                </h1>

                <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        {dict.about.p1}
                    </p>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                        {dict.about.p2}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>{dict.about.bot_title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                            {dict.about.bot_desc}
                        </p>
                    </div>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>{dict.about.ai_title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                            {dict.about.ai_desc}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
