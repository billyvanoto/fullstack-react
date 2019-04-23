import React from "react";

const Footer = () => {
  return (
    <div className="page-footer cyan">
      <div className="">
        <div className="row">
          <div className="col l12 s12" style={{textAlign:'center'}}>
            <h5 className="white-text">Office</h5>
            <p className="grey-text text-lighten-4">
              Address : ABC Building, A Street No 1.<br/>
              Telp : 01231323
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="">© 2019 Copyright Text</div>
      </div>
    </div>
  );
};

export default Footer;
