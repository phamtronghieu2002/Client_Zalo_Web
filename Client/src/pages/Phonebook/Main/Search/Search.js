import "./Search.scss";
import { useState } from "react";
function Search({onSearch}) {
    const [search, setSearch] = useState("");
    return ( 
        <div id="wp_search_list">
            <input
            type="text"
            placeholder="Tìm kiếm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
     );
}

export default Search;