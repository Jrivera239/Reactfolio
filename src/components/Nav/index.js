import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utills/helpers";

const Nav = (props) => {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);


  return (
    <header className="bgc">
      <h2 className="link">
        <a data-testid="link design-none" href="/">
          <span class="design-none"></span >{" "}
          <span className="reaxt">R</span>e
          <span className="reaxt">a</span>c
          <span className="reaxt">t</span>F
          <span className="reaxt">o</span>l
          <span className="reaxt">i</span>o

        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a  className="reaxt"
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span className="reaxt" onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span  className="reaxt"
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
