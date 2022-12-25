import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading: true,
            page:1,
            totalResult:0
        }
        document.title=`${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
    };
    async updateNews(){
     
    }
    async componentDidMount(){
      this.props.setprogress(0);
      const url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=55880454a1a346a9986dc6c80368ebbd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      this.props.setprogress(60);
      this.setState({
        articles: parsedData.articles,
        totalResult: parsedData.totalResults,
        loading: false
      }); 
      this.props.setprogress(100);
      console.log(this.state.page);
    }
  //  handleNextClick= async()=>{
  //   await this.setState({ page : this.state.page +1}) ;
  //    this.updateNews();
  //       }
  //   handlePreviousClick=async()=>{
  //    await this.setState({page : this.state.page -1}) ;
  //     this.updateNews();
  //   }
    
  fetchMoreData = async() => {
    const url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=55880454a1a346a9986dc6c80368ebbd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        page:this.state.page+1
      });
      console.log(this.state.page);
  };
    
  render() {
  
    return (
      <>
        <h2 className="text-center">Headlines</h2>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResult}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element,index) => {
              return (
                <div className="col-md-4 my-2" key={index}>
                  <NewsItem
                    title={element.title?.slice(0, 45)}
                    description={element.description?.slice(0, 88)}
                    urlToImage={element.urlToImage}
                    url={element.url}
                    authour={element.author}
                    time={element.publishedAt?element.publishedAt:"Unknown"}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
       {/* Button */}
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr;Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News
