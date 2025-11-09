import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'
import validator from 'validator'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In production (Vercel), use relative path to serverless function
      // In development, use localhost backend
      const isDevelopment = window.location.hostname === 'localhost'
      const apiUrl = isDevelopment ? 'http://localhost:5000' : ''
      
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSuccess(true)
        setEmail('')
        setMessage('')
        toast.success('Email successfully sent!', {
          position: "bottom-left",
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        })
      } else {
        throw new Error(data.message || 'Failed to send email')
      }
    } catch (error) {
      console.error('Email send error:', error)
      toast.error('Failed to send email. Please try again.', {
        position: "bottom-left",
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'failed',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            setIsSuccess(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            verifyEmail(e.target.value)
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting || !validEmail || !message}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
