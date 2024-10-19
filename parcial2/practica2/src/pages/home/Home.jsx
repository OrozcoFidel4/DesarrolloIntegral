import Alert from 'react-bootstrap/Alert'
import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>

        {[
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ].map((variant) => (
            <Alert key={variant} variant={variant}>
                This is a {variant} alert-check it out!
            </Alert>
        ))}
        </div>
    )
}

export default Home
