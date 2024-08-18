import './cards.css'




function Cards({title,imagesrc,description,reverse}){
    return(
        <div className="cards container-fluid my-2">
            <div className='mx-5'>
        <div className={`image-description-row py-5 row d-flex justify-content-center ${reverse ? 'reverse' : ''}`}  >
            
            <div className='descrpition-container text-white col-lg-5 col-11 d-flex my-auto justify-content-center '>
                <div className=''>
                <h1>{title}</h1>
                <p>{description}</p>
                </div>
            </div>
            <div className='img-container col-lg-5 col-11'>
                <img className='h-100 w-100' src={imagesrc}/>
            </div>
            </div></div>
        </div>
    )
}
export default Cards