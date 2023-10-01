import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./ContactMe.css"

function ContactMe() {
    const styles = {
        box: {
            backgroundColor: 'gray',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            width: '300px',
            borderRadius: '8px',
            margin: 'auto',
            marginTop: '45vh'
        },
        iconContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '10px',
        },
        icon: {
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.box}>
            <p>Let's Connect!</p>
            <div style={styles.iconContainer}>
                <a href="https://www.linkedin.com/in/gevorg-akopyan-2b92b7184/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" style={styles.icon}></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" style={styles.icon}></i>
                </a>
                <a href="mailto:gevorgakopyan01@gmail.com">
                    <i className="fa fa-envelope" style={styles.icon}></i>
                </a>
            </div>
        </div>
    );
}

export default ContactMe;