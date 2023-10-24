import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          Palistine Cities
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Jenin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Nablus
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tulkarm
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Ramallah
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Jerusalem
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Gaza
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
