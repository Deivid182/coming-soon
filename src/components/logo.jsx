import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <div className='w-full height-[60px] m-4 flex items-center justify-center'>
      <img src={logo} alt="logo" className='w-[50px]' />
    </div>
  )
}

export default Logo