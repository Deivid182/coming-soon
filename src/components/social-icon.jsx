
const SocialIcon = ({ icon }) => {
  return (
    <div className='w-8 h-8 flex items-center p-3 justify-center rounded-full shadow-md shadow-blue-400 cursor-pointer hover:scale-110 transition text-sky-600 hover:bg-sky-600 hover:text-white'>
      <i className={`fa-brands fa-lg  ${icon}`} />
    </div>
  )
}

export default SocialIcon