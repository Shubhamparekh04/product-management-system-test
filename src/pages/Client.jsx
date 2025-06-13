import React, { useState } from "react";
import FilterComponent from "../components/FilterComponent";
import SortComponent from "../components/SortComponent";
import SearchComponent from "../components/SearchComponent";
import CartComponent from "../components/CartComponent";
import ProductCard from "../components/ProductCard";

const Client = ({ productList, handleDelete, handleEdit }) => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [brandFilter, setBrandFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQty = (productId, newQty) => {
    if (newQty < 1) return;
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, qty: newQty } : item
      )
    );
  };

  const filteredProducts = productList
    .filter((val) =>
      val.pName.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((val) => (categoryFilter === "All" ? true : val.category === categoryFilter))
    .filter((val) => (brandFilter === "All" ? true : val.brand === brandFilter))
    .filter((val) => val.rating >= ratingFilter)
    .filter((val) => (!inStockOnly ? true : parseInt(val.stock) > 0));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-primary">🛍️ Flipzon</h1>
        <p className="text-muted fs-5">Your one-stop shopping destination</p>
      </div>

      {/* Search */}
      <div className="mb-3 px-3">
        <SearchComponent searchText={searchText} setSearchText={setSearchText} />
      </div>

      {/* Filters & Sort */}
      <div className="row mb-4 px-3">
        <div className="col-md-9">
          <FilterComponent
            productList={productList}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            brandFilter={brandFilter}
            setBrandFilter={setBrandFilter}
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
          />
        </div>
        <div className="col-md-3">
          <SortComponent sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div>

      {/* Main Layout: Product Grid + Cart */}
      <div className="row px-3">
        {/* Product Grid */}
        <div className="col-lg-8 mb-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {sortedProducts.length === 0 ? (
              <div className="text-center text-muted fs-5 my-5">
                No products found.
              </div>
            ) : (
              sortedProducts.map((val) => (
                <div className="col" key={val.id}>
                  <ProductCard
                    product={val}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    addToCart={addToCart}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Cart Sidebar */}
        <div className="col-lg-4">
          <CartComponent
            cart={cart}
            removeFromCart={removeFromCart}
            updateQty={updateQty}
          />
        </div>
      </div>
    </div>
  );
};

export default Client;


