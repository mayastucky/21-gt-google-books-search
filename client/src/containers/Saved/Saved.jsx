import React, { Component } from "react";
// import ResultsCard from "../ResultCard/ResultCard"
import API from "../../utils/API";

class Saved extends Component {
  state = {
    saved: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.savedBooks().then((res) => {
      this.setState({ saved: res });
    });
  };

  handleDelete = (id) => {
    API.deleteBook(id)
    .then((response) => {
      console.log(response)
      this.setState({saved: this.state.saved.filter((notDeleted) => {
        if(id === notDeleted._id){
          return false;
        }else{
          return true; 
        }
      })})
    })
  }
  render() {
    return (
      <div>
        {this.state.saved.map((savedBooks) => (
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                {/* how to get thumbnails when they don't have them  */}
                {/* <img src={book.volumeInfo.imageLinks.thumbnail || "https://f0.pngfuel.com/png/137/448/black-book-logo-png-clip-art-thumbnail.png"} class="card-img" alt={book.volumeInfo.title} /> */}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{savedBooks.title}</h5>
                  <p class="card-text">{savedBooks.authors} </p>
                  <p class="card-text">{savedBooks.description}</p>
                  <button type="button" class="btn btn-primary" onClick={() => this.handleDelete(savedBooks._id)}>
                    Delete
                  </button>
                  <button type="button" class="btn btn-primary">
                    <a
                      href={savedBooks.infoLink}
                      style={{ color: "white" }}
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      // <>Hello world</>
    );
  }
}

export default Saved;
