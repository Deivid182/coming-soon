
import { useState } from 'react'

const Form = () => {

  /**
   * Validates an email address.
   * 
   * @param {string} email - The email address to validate.
   * @returns {boolean} - True if the email is valid, false otherwise.
   */
  function validateEmail(email) {
    // The regular expression pattern to match an email address.
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern.
    return pattern.test(email);
  }

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')

    if (email === '') {
      setError('Please full the field')
      return
    }

    if (!validateEmail(email)) {
      setError('Please provide a valid email address')
      return
    }

    setError('')
    setTimeout(() => {
      setEmail('')
    }, 500)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className='flex flex-col gap-y-4 px-8 sm:px-0 sm:flex-row items-center gap-x-2 w-full max-w-2xl justify-center mt-6'>
      <div className='relative w-full'>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          placeholder='Your email address'
          required autoComplete='off'
          className={`
            w-full py-3 px-4 rounded-full border border-neutral-400 outline-none focus:border-sky-500
            ${error && 'border-red-500'}
            ${error && 'focus:border-red-500'}
          `}
        />
        {error && <p className='mr-auto mt-1 text-red-500 font-medium text-xs'>{error}</p>}
      </div>
      <button className='bg-sky-600 text-white font-semibold shadow-md shadow-sky-300 flex-shrink w-full md:w-1/3 rounded-full py-3 px-4 border-sky-600 border hover:bg-opacity-90 transition-colors'>
        Notify me
      </button>
    </form>
  )
}

export default Form