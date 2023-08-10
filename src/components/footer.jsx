import SocialIcon from './social-icon'


const icons = ['fa-twitter', 'fa-facebook-f', 'fa-instagram']

const Footer = () => {
  return (
    <footer className='flex flex-col gap-y-8 mt-32 mb-8'>
      <div className='flex items-center justify-center gap-x-4'>
        {icons.map(icon => (
          <SocialIcon
            key={icon}
            icon={icon}
          />
        ))}
      </div>
      <div className='text-sm font-light text-neutral-500 text-center'>
        &copy; Copyright Ping. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer