import { Fragment } from 'react/jsx-runtime'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Filter from './components/filter/Filter'
import Divider from './components/divider/Divider'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Fragment>
      <Nav />
      <Hero />
      <main className='main-content'>
        <section id='filter' className='filter-content'>
          <Filter />
        </section>
        <Divider orientation='vertical' />
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
