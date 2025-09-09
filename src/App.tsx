import { Fragment } from 'react/jsx-runtime'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Filter from './components/filter/Filter'
import Divider from './components/divider/Divider'
import Footer from './components/footer/Footer'
import Grid from './components/grid/Grid'
import { FilterProvider } from './state/filterContext'

function App() {
  return (
    <Fragment>
      <Nav />
      <Hero />
      <FilterProvider>
        <main className='main-content'>
          <section id='filter' className='filter-content'>
            <Filter />
          </section>
          <Divider orientation='vertical' />
          <section id='grid' className='grid-content'>
            <Grid />
          </section>
        </main>
      </FilterProvider>
      <Footer />
    </Fragment>
  )
}

export default App
