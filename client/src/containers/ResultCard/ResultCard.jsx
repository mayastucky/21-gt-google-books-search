import React, { Component } from "react";
import API from "../../utils/API";

class ResultCard extends Component {
  state = {
    books: [],
  };

  handleSearch = (event) => {
    const bookTitle = event.target.value;
    API.getBook(bookTitle).then((response) =>
      this.setState({ books: response.data.items })
    );
  };

  render() {
    console.log(this.state.books);
    return (
      <div>
        <form>
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Search for a Book
          </label>
          <div className="form-group row">
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="search"
                onChange={this.handleSearch}
              />
            </div>
          </div>
        </form>
        {this.state.books.map((book) => (
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                {/* how to get thumbnails when they don't have them  */}
                {/* <img src={book.volumeInfo.imageLinks.thumbnail || "https://f0.pngfuel.com/png/137/448/black-book-logo-png-clip-art-thumbnail.png"} class="card-img" alt={book.volumeInfo.title} /> */}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{book.volumeInfo.title}</h5>
                  <p class="card-text">{ book.volumeInfo.authors} </p>
                  <p class="card-text">{book.volumeInfo.description}</p>
                  {/* <button type="button" class="btn btn-secondary">
                    Save
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultCard;
