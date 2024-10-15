import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade"> Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internet. It serves as a
          virtual marketplace where businesses and individuals showcase their
          products ,interact with customers , and conduct transactions without
          needing a physical presence. E-commerce websites have gained immense
          popularity due to their convenience, accessibility, and the global
          reach they offer.{" "}
        </p>
        <p>
          It serves as a digital storefront where customers can browse items,
          view descriptions and images, add products to a shopping cart, and
          make purchases using various payment methods. eCommerce websites
          typically include features such as user accounts, order management,
          and customer reviews, making online shopping convenient and efficient
          for both consumers and businesses.
        </p>
      </div>
    </div>
  );
};
