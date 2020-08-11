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
    const confirmation = window.confirm("Are you sure you want to delete this book?")
    if (confirmation){
      API.deleteBook(id).then((response) => {
        console.log(response);
        this.setState({
          saved: this.state.saved.filter((notDeleted) => {
            if (id === notDeleted._id) {
              return false;
            } else {
              return true;
            }
          }),
        });
      });
    }

  };
  render() {
    return (
      <div>
        {this.state.saved.map((savedBooks) => (
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={savedBooks.image}
                  alt={savedBooks.title}
                  width="300"
                  style={{ marginLeft: "50px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{savedBooks.title}</h5>
                  <p className="card-text">{savedBooks.authors} </p>
                  <p className="card-text">{savedBooks.description}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.handleDelete(savedBooks._id)}
                    style={{marginBottom: "10px"}}
                  >
                    Delete
                  </button>
                  <br>
                  </br>
                  <button type="button" className="btn btn-primary">
                    <a href={savedBooks.infoLink} style={{ color: "white" }}>
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
