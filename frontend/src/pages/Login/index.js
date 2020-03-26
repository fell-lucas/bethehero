import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form>
                    <h1>Access your account</h1>
                    <input placeholder="Your ID" />
                    <button className="button" type="submit">Login</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Doesn't have an account?
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}