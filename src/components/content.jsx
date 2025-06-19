import ContentItems from "../data/ContentItems"
function ContentCards({image,title,description,pricing,discount,rate}){
    return(
            <section className="page-content">
            <div className="imgContent">
                {discount && <h3 className="off">{discount}</h3> }
                
                <img src={image} />
                {rate && <h4 className="rate">
                    <span className="icon">&#9733;</span> {rate} 
                </h4>}
                
            </div>
            <div className="typed-content">
                <div className="heading">
                <h3>{title}</h3>
                </div>
                <div className="text">
                <p>{description}</p>
                </div>
                <div className="pricing">
                    <h4>{pricing}</h4>
                </div>
            </div>
        </section>
    )
}
const Content = () => {
  return (
    <section className="content-container">
        {
            ContentItems.map((items,idx)=>{
                return <ContentCards key= {idx} image ={items.image} description={items.description} title={items.title} pricing={items.pricing} discount={items.discount} rate={items.rating} />
            })
        }
</section>
  )
}

export default Content