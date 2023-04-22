import { useEffect, useState } from "react";
import { fetchList } from "../services/api";
import { ItemDetails } from "./ItemDetails";
import { SearchSvg } from "../icons/searchSvg";
import { AppLogoSvg } from "../icons/AppLogoSvg";
import "./listItems.scss";

export function ListItems() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (
        window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((page) => page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    fetchList(search, page).then((newData) => {
      setData((data) => [...data, ...newData]);
      setLoading(false);
    });
  }, [search, page]);

  const handleChange = (e) => {
    setFilterData(e.target.value);
  };

  const filterFormOnSubmit = (e) => {
    e.preventDefault();
    setSearch(filterData);
  };

  return (
    <div className="list-items">
      <div className="list-items__header">
        <AppLogoSvg className={"list-items__logo"} />
        <form onSubmit={filterFormOnSubmit} className="list-items__form-search">
          <button type="submit" className="list-items__button-search">
            <SearchSvg />
          </button>
          <input
            className="list-items__input-search"
            type="text"
            name="filterData"
            value={filterData}
            placeholder="You're looking something?"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="list-items__contend-detail">
        {data.map((item, id) => (
          <ItemDetails key={id} item={item} />
        ))}
      </div>
    </div>
  );
}
