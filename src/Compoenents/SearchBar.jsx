import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SearchIcon from "@mui/icons-material/Search";

const HeaderSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}&category=${selectedCategory}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="header-searchBar">
      <div className="headerSearchBar flexBox">
        <select
          id="header-category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Laptops">Laptops</option>
          <option value="Watches">Watches</option>
          <option value="Headphones">Headphones</option>
        </select>
        <input
          className="searchBar"
          type="text"
          placeholder="Search Amazon.in"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress} 
        />
        <button className="searchButton" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default HeaderSearchBar;
