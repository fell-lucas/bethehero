import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Create new incident</h1>
                    <p>Describe the incident with a lot of details, so it's easier to find a hero to solve it.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Return
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Incident title" />
                    <textarea placeholder="Description" />
                    <input placeholder="Value" />
                    <button className="button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}