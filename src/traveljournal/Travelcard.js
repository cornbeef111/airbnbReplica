function Travel(props){
    return(
        <section>
              <div className='card--pic--div'> 
              <img src={props.image} className='card--pic' alt=""/> 
              </div>
              
              <div className='card--text--div'>
                <p> <img src='./images/Path.png' alt='' className='location-icon'/> {props.location}  <a href='https://google.com' className='card--link'>view on google maps</a></p>
                <h2>{props.name} </h2>
                <p className='card--date'>{props.date}</p>
                <p>{props.text}</p>
              </div>
        </section>
    )
}

export default Travel