import React, { useState } from 'react';
import { Form, Button, Modal, Spinner, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import '../styles/Register.css'; 

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const { handleSendCode, handleRegister, loading, message, error, codeSent, handleVerifyCode, setError } = useAuth(); 
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert('Your password must be at least 8 characters long.');
      return;
    }

    if (!codeSent) {
      await handleSendCode(email);
      setShowModal(true);
      return;
    }

    if (!verificationCode) {
      setError('Please enter the verification code.');
      return;
    }

    await handleRegister(username, email, password, verificationCode); 
    if (message) {
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  const handleVerifyCodeSubmit = async () => {
    if (verificationCode.trim() === '') {
      setError('Please enter the verification code.');
      return;
    }

    await handleVerifyCode(verificationCode);
    setShowModal(false); 
  };

  return (
    <div className="register-container">
      <Form onSubmit={handleSubmit} className="register-form">
        <h2 className="text-center mb-4">Register</h2>
        <Row>
          <Col xs={12} md={10} xl={10} className="mx-auto">
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control-custom"
              />
            </Form.Group>

            <div style={{ textAlign: 'center' }} >
              <Button type="submit" className="btn-submit w-80">
                {loading ? <Spinner animation="border" size="sm" /> : 'Register'}
              </Button>
            </div>
            
            {message && <p className="text-success mt-3">{message}</p>}
            {error && <p className="text-danger mt-3">{error}</p>}
          </Col>
        </Row>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Verification Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="verificationCode">
            <Form.Label>Verification Code</Form.Label>
            <Form.Control
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
              className="form-control-custom"
            />
          </Form.Group>
          {loading && (
            <div className="text-center mt-3">
              <Spinner animation="border" />
              <p className="mt-2">Sending code...</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleVerifyCodeSubmit}>
            Verify Code
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Register;
