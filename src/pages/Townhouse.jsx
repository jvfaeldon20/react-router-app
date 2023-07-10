import { useLoaderData, Await, defer, NavLink } from 'react-router-dom'
import { Suspense } from 'react'
import townhouses from '../api/townhousedata.json'

function Townhouse() {
const { data } = useLoaderData()
  return (
    <div className="townhouse">
      <Suspense fallback={<p>Loading Townhouses...</p>}>
        <Await resolve={data} errorElement={<p>Could not fetch data..</p>}>
          {(data) => (
              data?.data?.map((item, i) => {
                return (
                  <div className='item' key={i}>
                    <img src={item.image} alt={`img-${item.id}`} className="banner-img"/>
                    <div className="title">{item.title}</div>
                    <p>{item.description}</p>
                    <NavLink className="viewDetails" to={`${item.id}`}>See Details</NavLink>
                  </div>
                ) 
              })
          )}
        </Await>
      </Suspense>
    </div>
  )
}

export default Townhouse
export const townhouseLoader = async() => {
  return defer({
    data: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: townhouses
        })
      }, 5000)
    })
  })
}
