import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import API, { registerUser } from "../api/api"; 
import { ToastManager, useToast } from "../components/Toast";

function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { showToast, toasts } = useToast()

  const handleSignup = async (e) => {
    e.preventDefault()
    let userData = {
      email: email,
      password: password,
      username: email
    }
    e.preventDefault();
    try {
      const res = await registerUser(userData);
      console.log(res)
      if(res?.data?.message === 'User registered successfully'){
        showToast('Success! User Registered Successfully', { type: 'success' })
        setPassword('')
        setEmail('')
      } else {
        showToast('Error! User Registration Failed', { type: 'error' })
      }
    } catch (err) {
      showToast('Error! User Registration Failed', { type: 'error' })
    }

    console.log("Signup  1 with:", userData)
  }

  return (
    <div className="">
      <ToastManager toasts={toasts}/>
      {/* Header */}
      <nav className="ml-[-15px] mt-[-20px] bg-dark-200/50 fixed w-full z-50 h-[100px">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-500">Gruppur</h1>
          </div>
        </div>
      </nav>
      <br />

      
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="flex flex-1 items-start justify-center p-[1.5rem] mt-15" >
        <div className="w-[100%] max-w-[400px] p-[2rem]" style={{
            border: '1px solid #333',
            borderRadius: '8px'
        }}>
          <div className="text-center mb-[1.5rem]">
            <h1 style={{
                fontSize:'1.5rem',
                fontWeight: 'bold',
                marginBottom:'0.5rem'
            }}>Create an Account</h1>
            <p style={{
                color: '#999',
                fontSize:'0.9rem'
            }}>Enter your details to get started</p>
          </div>

          <form onSubmit={handleSignup} className="flex flex-col gap-[1.25rem] mb-[1.5rem]">
            <div className="flex flex-col items-start gap-[1rem]">
              <label htmlFor="signup-email" style={{fontSize:'0.9rem', fontWeight:'500'}}>
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                style={{
                    padding:'0.75rem',
                    borderRadius:'4px',
                    border:'1px solid #333',
                    backgroundColor:'#111',
                    color:'#fff',
                    fontSize:'1rem',
                    width:'100%'
                }}
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-[0.5rem] items-start">
              <label htmlFor="signup-password" style={{fontSize:'0.9rem', fontWeight:'500'}}>
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                style={{
                    padding:'0.75rem',
                    borderRadius:'4px',
                    border:'1px solid #333',
                    backgroundColor:'#111',
                    color:'#fff',
                    fontSize:'1rem',
                    width:'100%'
                }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" style={{
                  padding: '0.75rem',
                  backgroundColor: '#2176ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
            }}>
              Sign Up
            </button>
          </form>

          <div className="auth-footer">
            Already have an account?{" "}
            <Link to="/signin" className="auth-link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
      

      {/* Footer */}
      <footer className="footer mt-10">
        <p>© {new Date().getFullYear()} Gruppur. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default SignupPage
