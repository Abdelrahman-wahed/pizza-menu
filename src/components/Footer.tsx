import React from "react";
type FooterProps = {
  deleteAll: () => void;
};
export default function Footer({deleteAll}: FooterProps) {
  //   let hour = new Date().getHours();
  //   let open = 10;
  //   let closed = 22;
  //   let isOpen = hour >= open && hour <= closed;
  return (
    // <footer className="footer">
      <div className="order">
        <p>We 're Open from 12:00 to 22:00. come visit us or order online</p>
        <button className="btn"  onClick={()=>deleteAll()}>
          Delete All
        </button>
      </div>
    // </footer>
  );
}
