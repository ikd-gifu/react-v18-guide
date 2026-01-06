import "./Child.css";
// import React from "react"; // Reactフラグメントを使うためにReactをインポートする必要がある
// import { Fragment } from "react"; // Reactフラグメントを使うためにFragmentをインポートする。key属性も指定できる

const Child = () => {
  return ( // returnで返すJSXは1つの要素である必要がある
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam atque itaque reprehenderit officia blanditiis rem consequatur repellendus, aliquid exercitationem tempora cum. Eaque, aliquid reiciendis rem nesciunt vitae accusantium debitis.</p>
    </>
  );
};

export default Child;
