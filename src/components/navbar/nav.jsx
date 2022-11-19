import { React, useState, useEffect } from "react";
import './nav.css'
import navLogo from '../../Logo.png'
import { Link } from "react-router-dom";

const Navbar = ({ transferData, setTransferData }) => {

  const [term, setTerm] = useState('')

  const search = () => {
    if (term) {
      const result = transferData.filter((el) => (el.player).includes(term))
      setTransferData(result)
    } else {
      setTransferData(transferData)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      search();
    }, 1600);
    return () => clearTimeout(timeout)
  }, [term])



  return (
    <>
      <nav className="navbar navbar-expand-lg  shadow  navbar-dark">
        <div className="container-fluid py-3">

          <Link className="navbar-brand" to={"/"}>
            <span>Soccer</span><img src={navLogo} style={{ width: "40px" }}></img><span>Transfers</span></Link>

          <div className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-inline-flex px-1">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>About us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link"  to={"/savedtransfers"}>Saved Transfers</Link>
              </li>
            </ul>

            <form className="d-flex search-bar">
              <input className="form-control me-2" type="search"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
                placeholder="Search by Player name only"
                aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
