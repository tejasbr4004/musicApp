import React from "react";
import Songcard from "./Songcard";
import Spinner from "./Spinner";
import Nodatafoundpage from "./Nodatafound_page";
import { Songlists } from "./Songlists";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Startpage.css";
import Footer from "./Footer";




const Mainpage = () => {
  const [data, setData] = useState(Songlists);
  const [search, setSearch] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearch(input);

    const searchList = Songlists.filter((item) => {
      return (
        item.song_name.toLowerCase().indexOf(input.toLowerCase()) !== -1 ||
        item.movie_name.toLowerCase().indexOf(input.toLowerCase()) !== -1 ||
        item.singer.toLowerCase().indexOf(input.toLowerCase()) !== -1
      );
    });

    setData(searchList);
  };

  return (
    <div className="background">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to={"/Startpage"} className="navbar-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="red"
              class="bi bi-boombox-fill"
              viewBox="0 0 16 16"
            >
              <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0ZM2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1ZM6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              <path d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6Zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
            </svg>{" "}
           <span className="logohead" style={{ color: "orange"}}>BR𝄞MUSIC𝄞</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex" role="search" onSubmit={onSubmit}>
              <input
                class="form-control me-2"
                type="text"
                value={search}
                placeholder="songs movie singer"
                aria-label="Search"
                onChange={handleSearch}
              />
              <button
                class="btn btn-outline-danger"
                type="submit"
                value="Search"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {data.length >= 1 ? (
        <center>
          <Songcard songs={data} />
        </center>
      ) : (
        <div>
          <Spinner />
          <Nodatafoundpage />
        </div>
      )}


    <Footer />
    </div>
  );
};
export default Mainpage;
