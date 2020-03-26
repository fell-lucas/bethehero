import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome, APAD</span>
                <Link className="button" to="/incidents/new">
                    Submit new incident
                </Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Incidents</h1>
            <ul>
                <li>
                    <strong>INCIDENT:</strong>
                    <p>test</p>
                    <strong>DESCRIPTION:</strong>
                    <p>test DESCRIPTION</p>
                    <strong>VALUE:</strong>
                    <p>$40</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>INCIDENT:</strong>
                    <p>test</p>
                    <strong>DESCRIPTION:</strong>
                    <p>test DESCRIPTION</p>
                    <strong>VALUE:</strong>
                    <p>$40</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>INCIDENT:</strong>
                    <p>test</p>
                    <strong>DESCRIPTION:</strong>
                    <p>test DESCRIPTION</p>
                    <strong>VALUE:</strong>
                    <p>$40</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>INCIDENT:</strong>
                    <p>test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>test DESCRIPTION</p>
                    
                    <strong>VALUE:</strong>
                    <p>$40</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}