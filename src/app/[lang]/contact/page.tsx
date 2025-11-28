import React from 'react';
import { getDictionary } from '@/dictionaries/get-dictionary';

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>
                {dict.contact.title}
            </h1>

            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', width: '100%', position: 'relative' }}>
                {/* Decorative Glow */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(0, 243, 255, 0.05) 0%, transparent 70%)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }} />

                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{dict.contact.headquarters}</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', lineHeight: 1.6 }}>
                        1401 21st ST #5978<br />
                        Sacramento, CA 95811
                    </p>
                </div>

                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{dict.contact.email_us}</h3>
                    <a href="mailto:contactus@botai.bot" style={{ fontSize: '1.5rem', color: 'var(--foreground)', textDecoration: 'none', borderBottom: '1px solid var(--secondary)', paddingBottom: '2px' }}>
                        contactus@botai.bot
                    </a>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
                    <input
                        type="text"
                        placeholder={dict.contact.name_placeholder}
                        style={{
                            background: 'var(--glass)',
                            border: '1px solid var(--glass-border)',
                            padding: '1rem',
                            borderRadius: '8px',
                            color: 'var(--foreground)',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <input
                        type="email"
                        placeholder={dict.contact.email_placeholder}
                        style={{
                            background: 'var(--glass)',
                            border: '1px solid var(--glass-border)',
                            padding: '1rem',
                            borderRadius: '8px',
                            color: 'var(--foreground)',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <textarea
                        placeholder={dict.contact.message_placeholder}
                        rows={4}
                        style={{
                            background: 'var(--glass)',
                            border: '1px solid var(--glass-border)',
                            padding: '1rem',
                            borderRadius: '8px',
                            color: 'var(--foreground)',
                            fontSize: '1rem',
                            outline: 'none',
                            resize: 'vertical'
                        }}
                    />
                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
                        {dict.contact.send}
                    </button>
                </form>
            </div>
        </main>
    );
}
