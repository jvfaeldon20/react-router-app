import townhouses from '../api/townhousedata.json'
import { useParams, useLocation } from 'react-router-dom'
import '../index.css'

function TownhouseItem() {
const { id } = useParams()
const location = useLocation()
const { pathname } = location
const segments = pathname.split('/')
const filteredItem = townhouses.filter((item, i) => item.id === Number(id))
console.log(filteredItem);
  return (
    <div>
        <p className="location">{` ${segments[1]} >  ${segments[2]} > ${segments[3]}`}</p>
        <div className="details">
            {
                filteredItem.map((item, i) => {
                    return (
                        <div className='item' key={i}>
                            <img src={item.image} alt="img" className="banner-img"/>
                            <div className="title">{item.title}</div>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TownhouseItem
