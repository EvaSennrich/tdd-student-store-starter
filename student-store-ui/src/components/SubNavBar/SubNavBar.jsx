import React from "react";
import "./SubNavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
ProductCard;

const SubNavBar = ({ searchForItem, setInputText, products, setProducts, allProducts }) => {
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

    console.log("DOOODOOODOO", selectedCategory);
    filterResult.length > 0 && setProducts(filterResult);
  }
  return (
    <>
      <div className="subNav-content">
        <div className="row-content">
          <div className="searchBar-div">
            <input type="text" className="searchBar" placeholder="Search" onChange={searchForItem} />
            {/* onChange={(e) => setInputText(e.target.value)} */}
            <SearchIcon className="searchIcon" />
          </div>
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

//app.jsx
//const [category, setCategory] = useState(products)
// const categoryItems = [...new Set(products.map((item) => item.category))];

// const CategoryBar = ({ setCategory, categoryItems, products, filterCategory }) => {
//   return (
//     <>
//       <div className="categoryBtns">
//         {categoryItems.map((item, id) => {
//           return (
//             <button key={id} onClick={() => filterCategory(item)}>
//               {item}
//             </button>
//           );
//         })}
//         <button onClick={() => setCategory(products)}>All</button>
//       </div>
//     </>
//   );
// };

// const filterCategory = (cat) => {
//   const newItem = products.filter((newItem) => {
//     return newItem.category === cat;
//     // comparing category for displaying data
//   });
//   setCategory(newItem);
// };

export default SubNavBar;
