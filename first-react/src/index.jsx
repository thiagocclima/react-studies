import { createRoot } from 'react-dom/client'
import Header from '../src/Header'
import Main from '../src/Main'
import Footer from '../src/Footer'

const root = createRoot(document.getElementById('root'))

function Page () {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

root.render(<Page />)
