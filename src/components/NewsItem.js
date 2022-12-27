import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,urlToImage,url,authour,time,source}=this.props;
    return (
      <div >
            <div className="card " >
              <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:0}}>
            <span className=" badge rounded-pill bg-danger" >
              {source}
            </span>
            </div>
                <img src={urlToImage?urlToImage:"https://cdn.pixabay.com/photo/2021/09/15/12/52/animal-6626792__340.jpg"} className="card-img-top" style={{aspectRatio:"3/2", backgroundSize:"cover"}} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description?description:"Description is not available"}...</p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read more</a>
                        <p className="card-text mt-2"><small className="text-muted">
                          Author : {authour?authour.slice(0,12)+"..":"Unknown"} on {(new Date(time)).toUTCString()} 
                        </small>  
                        </p>
                    </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
