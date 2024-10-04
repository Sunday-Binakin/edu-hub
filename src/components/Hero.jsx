import learn from '../assets/images/learn_img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
// import { faLeanpub } from '@fortawesome/free-solid-svg-icons';
const Hero = () => {
    return (

        <div>
            <div className="background-image">
                <div className="overlay">
                    <div className="hero-text">
                        <h1>Learning center for your kids</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, libero beatae porro commodi eveniet accusamus   id animi, asperiores error   hic!</p>
                        <button>Explore Now</button>
                    </div>
                    <div className='play-button'>
                      {/* <span><FontAwesomeIcon icon={faPlay} /><button>Play</button></span>   */}
                      <span><button><FontAwesomeIcon color='white' fontSize='30px' icon={faPlay} /></button></span>  
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="learn">
                    <div className="learn-img">
                        <img src={learn} alt="img" />
                    </div>
                    <h3>Learn</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="play">
                <div className="play-img">
                        <img src={learn} alt="img" />
                        {/* <span><FontAwesomeIcon icon={faLeanpub} /></span> */}
                    </div>
                    <h3>Learn</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="meal">
                <div className="meal-img">
                        {/* <img src={learn} alt="img" /> */}
                        <span className='feature-icon' ><FontAwesomeIcon fontSize='30px' icon={faSchool} /></span>
                        {/* <FontAwesomeIcon icon={faSchool} /> */}
                    </div>
                    <h3>Learn</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                </div>
            </div>
        // </div>
    )
}
export default Hero