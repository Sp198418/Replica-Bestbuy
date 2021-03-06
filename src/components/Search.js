import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"50rem",background:"#F2F1F9", border:"none", padding:"10px 10px", position:"relative", top: '18px', display:"flex"};
  return (
    <div className= "Searchbar">
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Best Buy"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    </div>
  );
}

export default SearchBar