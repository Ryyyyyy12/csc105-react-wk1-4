import React from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

function renderDish(dish) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}
function renderComments(detail,comments){  
    const printcomment = comments.filter((el)=>el.dishId===detail.id)
    if(detail!=null){
        return(
        <Card>
            <CardTitle><h4>Comment</h4></CardTitle>
            <CardBody>
                {printcomment.map((el)=>{return(
                <div key={el.id}>
                    {el.comment}
                    <br></br>
                    {"--" + el.author + ","}
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(el.date)))}
                </div>
                )})}
            </CardBody>
        </Card>
    )
    }else{
        <div></div>
    }
    
}   

function DishDetail({detail,comments}) {

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-5 m-1'>
                {renderDish(detail)} 
            </div>
            <div className='col-12 col-md-5 m-1'>
                {renderComments(detail,comments)}
                {/* { console.log(comments)} */}
            </div>
        </div>
        
    </div>
  )
}

export default DishDetail
