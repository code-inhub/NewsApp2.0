import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  getBusiness,
  getEntertainement,
  getGeneral,
  getHealth,
  getScience,
  getSports,
  getTechnology,
} from "../routes/route.js";

export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  static defaultProps = {
    country: "in",
    pageSize: 50,
    category: "general",
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    console.log("hello");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-TheMonk`;
  }
  async updateNews() {
    this.props.setProgress(10);
    let data;

    if (this.props.category === "general") {
      try {
        data = await getGeneral();
      } catch (error) {
        console.log(error);
      }
    }
    
    else if (this.props.category === "entertainment") {
      try {
        data = await getEntertainement();
      } catch (error) {
        console.log(error);
      }
    } else if (this.props.category === "business") {
      try {
        data = await getBusiness();
      } catch (error) {
        console.log(error);
      }
    } else if (this.props.category === "sports") {
      try {
        data = await getSports();
      } catch (error) {
        console.log(error);
      }
    } else if (this.props.category === "health") {
      try {
        data = await getHealth();
      } catch (error) {
        console.log(error);
      }
    } else if (this.props.category === "science") {
      try {
        data = await getScience();
      } catch (error) {
        console.log(error);
      }
    } else if (this.props.category === "technology") {
      try {
        data = await getTechnology();
      } catch (error) {
        console.log(error);
      }
    }

    this.props.setProgress(30);
    // let parsedData = await data.json();
    let parsedData = data;
    this.props.setProgress(70);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  // fetchMoreData = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=1279918c906d453d8f3bdcd0eb25c3d2&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ page: this.state.page + 1 });
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: this.state.articles.concat(parsedData.articles),
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  // };
  render() {
    console.log("render");
    return (
      <>
        <br />
        <h2 className="text-center mt-5" style={{ marginTop: "3rem" }}>
          TheMonk - Top Headlines from{" "}
          {this.capitalizeFirstLetter(this.props.category)}
        </h2>
        <div className="text-center"> {this.state.loading && <Spinner />}</div>
        <InfiniteScroll
          className="text-center"
          dataLength={this.state.articles.length}
          // next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
          <div className="container ">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>{" "}
      </>
    );
  }
}

export default News;
