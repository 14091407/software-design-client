import Head from '../components/head'
import Footer from '../components/footer'
import Nav from '../components/nav'

const Layout = props => (
  <div className='container'>
    <Head title={props.title}/>
    <Nav />
    <div>
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout