import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Create account</h1>
                    <p>Create an account, access the platform and help people find the incidents of your NGO.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Already have an account?
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="NGO Name" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="WhatsApp" />
                    <div className="input-group">
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="SA" style={{ width: 80 }} />
                    </div>
                    <button className="button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}