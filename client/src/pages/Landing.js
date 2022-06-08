import cloud from '../assets/images/cloud.png'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <div className='cloudLogo'>
          <Logo />
        </div>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>cloud</span> tool
          </h1>
          <p>
              Save your new job opportunity, which you answered, for a better overview of all your jobs. 
              In the overview you will see the stats of all your submitted jobs, interviews and also rejected.
              You can also edit your jobs in which phase it is.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login / Register
          </Link>
        </div>
        <img src={cloud} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
