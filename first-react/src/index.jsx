import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

function Header() {
  return (
      <header>
        <img src="../public/react-logo.png" width="40px" alt="the react logo" />
      </header>
  )
}

function Main() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there!</li>
        <li>I would like to do something different</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2024 Lima development. All rights reserved.</small>
    </footer>
  )
}

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
