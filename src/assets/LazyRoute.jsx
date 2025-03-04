import { lazy,Suspense } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router"
// import Sample1 from './Sample1'
// import Sample2 from './Sample2'
// import Sample3 from './Sample3'

const Sample1 = lazy(()=>import('./Sample1'))
const Sample2 = lazy(()=>import('./Sample2'))
const Sample3 = lazy(()=>import('./Sample3'))


const Header = () => {
  return (
    <div>
      <nav>
        <ul style={{listStyle:'none',display:'flex',gap:'50px'}}>
          <li ><Link to={'/sample1'}>Sample1</Link></li>
          <li><Link to={'/sample2'}>Sample2</Link></li>
          <li><Link to={'/sample3'}>Sample3</Link></li>
        </ul>
      </nav>
    </div>
  )
}
const LazyRoute = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          <Route path='/sample1' element={<Sample1 />}></Route>
          <Route path='/sample2' element={<Sample2 />}></Route>
          <Route path='/sample3' element={<Sample3 />}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}
export default LazyRoute;