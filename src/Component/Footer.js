import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

function Footer() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleAccept = () => {
        setShowModal(false);
        navigate('/LoginForm');
    };

    return (
        <>
            <footer className="footer">
                <p>
                    &copy; 2025 Cultivator's Corner.{' '}
                    <span className="text-primary" style={{ cursor: 'pointer' }} onClick={() => setShowModal(true)}>
                        Terms & Conditions
                    </span>
                </p>
            </footer>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Welcome to our e-commerce platform where you can purchase fresh fruits and vegetables directly from farmers. By using our website, you agree to the following terms and conditions.</p>
                    <p>To purchase products, you must create an account. You are responsible for maintaining the confidentiality of your account information.</p>
                    <p>All orders are subject to availability. We accept various payment methods, and you agree to provide accurate payment information.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAccept}>
                        Accept
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Footer;
