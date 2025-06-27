import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light" style={{
      background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    }}>
      <div className="col-11 col-sm-8 col-md-5 col-lg-4">
        <div className="card shadow-lg border-0 p-5 rounded-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-2">Login</h2>
            <p className="text-muted">Welcome back! Please login to your account.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input className="form-control form-control-lg"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input className="form-control form-control-lg"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            {errMsg && <div className="alert alert-danger py-2">{errMsg}</div>}
            <button className="btn btn-primary btn-lg w-100 mb-2" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="text-center mt-3">
            <span className="text-muted">Don&apos;t have an account?</span>
            <a href="/signup" className="ms-2 fw-semibold text-decoration-none text-primary">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login