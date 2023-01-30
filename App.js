import React from "react";
import "./App.css";
import Plan from "./Plan";

class App extends React.Component {
  state = {
    text: "",
    items: [],
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };

  handleDelete = (id) => {
    const oldItems = [...this.state.items];
    const items = oldItems.filter((element, i) => {
      return i !== id;
    });
    this.setState({ items: items });
  };
  render() {
    return (
      <>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-sm-6 mx-auto shadow-lg">
              <h2 className="text-center">Today's Plan</h2>
              <div className="row">
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write Plan here"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-2">
                  <button
                    onClick={this.handleAdd}
                    className="btn btn-warning px-5 font-weight-bold"
                  >
                    Add
                  </button>
                </div>
                <div className=" container-fluid">
                  <ul className="list-unstyled row m-5">
                    <Plan p={this.state.items} sendData={this.handleDelete} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
