import star from './images/Star.png'


// this was destructured from the prps
// function Card({name,img,price}){
    
//     return(
//         <section>
//             <div className="card--pic">
//                 <img src={img} className="each-pic" alt='' />
//                 {/* <button>SOLD OUT</button> */}
//             </div>
//             <p><img src={star} alt="sofia" className='star' /> 5.0 <span>(6).USA</span></p>
//             <p className='card-para'>{name}</p>
//             <p className='card-para'><strong>{price}</strong> / person</p>
//         </section>
//     )
// }

function Card(props){
    let badgeText
    if(props.detail.openSpots === 0){
        badgeText = 'SOLD OUT'
    }else if(props.detail.location === 'online'){
        badgeText='ONLINE'
    }
    return(
        <section>
            {badgeText && <div><button className='btn'>{badgeText}</button> </div>}
            <div className="card--pic">
                <img src={props.detail.img} className="each-pic" alt='' />
            </div>
            <p><img src={star} alt="sofia" className='star' /> {props.detail.rating} <span>({props.detail.reviewCount}) .{props.detail.country}</span></p>
            <p className='card-para'>{props.detail.name}</p>
            <p className='card-para'><strong>From ${props.detail.price}</strong> / person</p>
        </section>
    )
}


export default Card
