import dashboard from '../assets/illustration-dashboard.png'

const Showcase = () => {
  return (
    <div className='max-w-full h-auto mt-4 px-4 sm:px-0'>
      <img src={dashboard} loading='lazy' alt="showcase" className='w-full h-full object-cover object-center' />
    </div>
  )
}

export default Showcase