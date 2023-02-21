import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "./unsplash";

import ListImages from "./ListImages";

class App extends React.Component {
  // penyimpanan data gambar
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      // ambil data dari unsplash berdasarkan term/inputan user
      params: { query: term },
    });

    this.setState({ images: res.data.results });
    console.log(this.state.images[1].urls.regular);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* get term from search bar */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* passing image data to show it */}
        <ListImages data={this.state.images} />
      </div>
    );
  }
}

export default App;
