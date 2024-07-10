import image from './images/Group77.png'

function Hero(){
    return(
        <div className='section'>
            <img src={image} alt='' className='hero--img'></img>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero;