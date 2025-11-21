import React, { useState, useEffect, useRef } from 'react';
import { Container, Form, Button, Spinner, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const alertRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    const result = await login(email, password); 

    if (result.success) {
      setSuccessMsg('Login successful.');
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else {
      setErrorMsg(result.error || 'An error occurred. Please try again.');
    }

    setLoading(false);
  };

  const handleForgotPassword = () => {
    navigate('/reset-password');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px', padding: '2rem' }} className="shadow">
        <h3 className="text-center mb-4">Login</h3>

        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <CSSTransition
            in={!!errorMsg || !!successMsg}
            timeout={300}
            classNames="bounce"
            unmountOnExit
            nodeRef={alertRef}
          >
            <div ref={alertRef}>
              {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
              {successMsg && <Alert variant="success">{successMsg}</Alert>}
            </div>
          </CSSTransition>

          <div className="d-grid mt-3">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Please wait...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </div>
        </Form>

        <div className="mt-3 text-center">
          <Button variant="link" onClick={handleForgotPassword}>
            Forgot Password
          </Button>
        </div>

        <div className="mt-2 text-center">
          <Button variant="link" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
