import React from 'react';
import '@/styles/header.scss'

export function Header() {
    return (
        <header className="header">
            <div className="header__logo">VM</div>
            <nav className="header__nav">
                <a href="#about" className="header__nav-link">About</a>
                <a href="#skills" className="header__nav-link">Skills</a>
                <a href="#projects" className="header__nav-link">Projects</a>
                <a href="#resume" className="header__nav-link">Resume</a>
                <a href="#contacts" className="header__nav-link">Contacts</a>
            </nav>
            <div className="header__features">
                <button className="header__lang-switch">EN/RU</button>
                <button className="header__theme-switch">🌙</button>
            </div>
        </header>
    )
}