import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 space-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="mt-10 space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>News Room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 mt-0">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>How Airbnb Works</p>
        <p>Accessibility</p>
        <p>This is not real</p>
        <p>Awesome</p>
        <p>Students</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Elmas React</p>
        <p>Presents</p>
        <p>Referrals accepted</p>
        <p>Outdoor</p>
        <p>Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Contact Us</p>
        <p>Guestlyy</p>
        <p>Win</p>
      </div>
    </div>
  );
};

export default Footer;
