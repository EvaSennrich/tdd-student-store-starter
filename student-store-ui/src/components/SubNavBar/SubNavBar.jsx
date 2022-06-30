import React from "react";
import "./SubNavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const SubNavBar = ({ products, setProducts, allProducts }) => {
  // const [category, setCategory] = useState("");
  const [filterResult, setFilterResult] = useState([]);

  // var clothing = products.filter((e) => e.category === "clothing");
  // var food = products.filter((e) => e.category === "food");
  // var accessories = products.filter((e) => e.category === "accessories");
  // var tech = products.filter((e) => e.category === "tech");

  // const changeCategory = (selectedCategory) => {
  //   setCategory(selectedCategory);
  // };

  function allCategories() {
    setProducts(allProducts);
  }

  function filterCategory(selectedCategory) {
    // changeCategory(selectedCategory);
    setFilterResult(products.filter((e) => e.category === selectedCategory));

    console.log("------>", selectedCategory);
    filterResult.length > 0 && setProducts(filterResult);
  }

  return (
    <>
      <div className="subNav-content">
        <div className="row-content">
          <div className="row-content2">
            <ul className="category-menu">
              <li>
                <button className="menuBTN" onClick={allCategories}>
                  All
                </button>
              </li>
              <li>
                <button className="menuBTN" onClick={() => filterCategory("clothing")}>
                  Clothing
                </button>
              </li>
              <li>
                <button className="menuBTN" onClick={() => filterCategory("food")}>
                  Food
                </button>
              </li>
              <li>
                <button className="menuBTN" onClick={() => filterCategory("accessories")}>
                  Accessories
                </button>
              </li>
              <li>
                <button className="menuBTN" onClick={() => filterCategory("tech")}>
                  Tech
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavBar;
