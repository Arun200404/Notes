import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  // Handle email/password signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
            <h2 className="fw-bold mb-2">Sign Up</h2>
            <p className="text-muted">Create your free account to get started.</p>
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
                placeholder="Create a password"
                required
              />
            </div>
            {errMsg && <div className="alert alert-danger py-2">{errMsg}</div>}
            <button className="btn btn-success btn-lg w-100 mb-2" type="submit" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <div className="text-center mt-3">
            <span className="text-muted">Already have an account?</span>
            <a href="/login" className="ms-2 fw-semibold text-decoration-none text-primary">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp