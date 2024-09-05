import React, { useState } from 'react';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Sign Up
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate('/overview'); // Redirect to a protected page upon successful login/signup
    } catch (error) {
      let errorMessage = isLogin ? 'Failed to log in. Please check your credentials.' : 'Failed to sign up. Please check your details.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password.';
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Email already in use.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address.';
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{isLogin ? "Login" : "Sign Up"}</div>
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className='input'>
            <input 
              type='text' 
              placeholder='Name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
        )}
        <div className='input'>
          <input 
            type='email' 
            placeholder='Email id' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className='input'>
          <input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className='forgot-password'>Forgot password? <span>Click Here!</span></div>
        <div className='submit-container'>
          <button type="submit" className='submit' disabled={loading}>
            {loading ? (isLogin ? 'Logging in...' : 'Signing up...') : (isLogin ? 'Login' : 'Sign Up')}
          </button>
          <div 
            className='submit gray' 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </div>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
