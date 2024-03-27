import { Link } from 'react-router-dom'
import hobbit from '../../assets/hobbit.jpg'
import './banner.css'

function Banner() {
  return (
    <>
    <div className='bgimg bg-[#F3F3F3] flex justify-around items-center'>
            <div>
              <h3 className=' text-black'> Books to freshen <br /> up your bookshelf</h3>
              <Link to={'/listedBooks'}> <button className='bbtn p-2 m-3 ' type="">View the List</button></Link>
            </div>
            <div className=' my-5'>
              <img src={hobbit} alt="" />
            </div>
    </div>
    </>
  )
}

export default Banner