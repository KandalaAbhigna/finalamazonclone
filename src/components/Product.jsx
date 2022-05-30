import React from "react";
import Amazonecho from "./Amazonecho";
import Applepro from "./Applepro";
import Book from "./Book";
import Gamingmonitor from "./Gamingmonitor";
import Mixer from "./Mixer";
import Samsung from "./Samsung";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <Gamingmonitor />
        <Amazonecho />
        <Applepro />
        <Samsung />
      </div>
    </div>
  );
}

export default Product;
