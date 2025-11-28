import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from "./ThemeToggle";

const Navbar = ({ lang, dict }: { lang: string, dict: any }) => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '1.5rem 0',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--glass-border)',
            background: 'var(--glass)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href={`/${lang}`} style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px' }}>
                    Bot<span className="gradient-text">AI</span>
                </Link>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href={`/${lang}`} className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.3s' }}>
                        {dict.navbar.home}
                    </Link>
                    <Link href={`/${lang}/about`} className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.3s' }}>
                        {dict.navbar.about}
                    </Link>
                    <Link href={`/${lang}/careers`} className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.3s' }}>
                        {dict.navbar.careers}
                    </Link>
                    <Link href={`/${lang}/contact`} className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.3s' }}>
                        {dict.navbar.contact}
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
                        {/* Language Switcher */}
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Link href="/en" style={{
                                fontSize: '0.8rem',
                                fontWeight: lang === 'en' ? 700 : 400,
                                color: lang === 'en' ? 'var(--primary)' : 'var(--foreground)',
                                cursor: 'pointer'
                            }}>EN</Link>
                            <span style={{ color: 'var(--foreground)', opacity: 0.5 }}>|</span>
                            <Link href="/zh" style={{
                                fontSize: '0.8rem',
                                fontWeight: lang === 'zh' ? 700 : 400,
                                color: lang === 'zh' ? 'var(--primary)' : 'var(--foreground)',
                                cursor: 'pointer'
                            }}>中文</Link>
                        </div>

                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
