import Container from './components/container'
import Footer from './components/footer'
import Form from './components/form'
import Heading from './components/heading'
import Logo from './components/logo'
import Showcase from './components/showcase'

const App = () => {
  return (
    <Container>
      <main className='flex flex-col items-center w-full max-w-lg mb-8'>
        <Logo />
        <Heading />
        <Form />
        <Showcase />
        <Footer />
      </main>
    </Container>
  )
}

export default App