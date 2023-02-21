import React from "react";
import LightGallery from "lightgallery/react";

// import styles light gallery
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins thumbnail and zoom
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

class ListImages extends React.Component {
  onInit = () => {
    console.log("lightGallery has been initialized");
  };
  render() {
    return (
      // memanggil fungsi LightGallery
      <LightGallery
        onInit={this.onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {this.props.data.map((dataImages, index) => (
          <a href={dataImages.urls.regular}>
            <img alt="" key={index} width="50%" src={dataImages.urls.small} />
          </a>
        ))}
      </LightGallery>
    );
  }
}

export default ListImages;
