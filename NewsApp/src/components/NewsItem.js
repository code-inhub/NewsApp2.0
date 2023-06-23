import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {" "}
            <span
              className=" badge rounded-pill bg-danger"
              style={{
                zIndex: "3",
                left: "90%",
              }}
            >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>{" "}
          </div>
          <img
            src={
              !imageUrl
                ? "https://www.adobe.com/express/learn/blog/media_18051b9422b3e398d9f45fde08922c059d7b90737.png?width=2000&format=webply&optimize=medium"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{description}... </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
// export default NewsItem;
