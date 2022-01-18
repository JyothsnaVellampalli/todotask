import React from 'react'

function pricecard(props) {
    //console.log(props);
  return <>
  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.product}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.usersEnabled?"":"text-muted"}><span className="fa-li"><i className={props.data.usersEnabled?"fas fa-check":"fas fa-times"}></i></span>{props.data.users}</li>
              <li className={props.data.storageEnabled?"":"text-muted"}><span className="fa-li"><i className={props.data.usersEnabled?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
              <li className={props.data.publicprojectsEnabled?"":"text-muted"}><span className="fa-li"><i className={props.data.usersEnabled?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicprojects}</li>
              <li className={props.data.communityaccessEnabled?"":"text-muted"}><span className="fa-li"><i className={props.data.usersEnabled?"fas fa-check":"fas fa-times"}></i></span>{props.data.communityaccess}</li>
              <li className={props.data.privateprojectsEnabled?"":"text-muted"}><span className="fa-li"><i className={props.data.usersEnabled?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateprojects}</li>
              <li className={props.data.phonesupportEnabled?"":"text-muted"}><span className="fa-li"><i className={props.data.usersEnabled?"fas fa-check":"fas fa-times"}></i></span>{props.data.phonesupport}</li>
              <li className={props.data.subdomainEnabled?"":"text-muted"}><span className="fa-li"><i className={props.data.usersEnabled?"fas fa-check":"fas fa-times"}></i></span>{props.data.subdomain}</li>
              <li className={props.data.reportsEnabled?"":"text-muted"}><span className="fa-li"><i className={props.data.usersEnabled?"fas fa-check":"fas fa-times"}></i></span>{props.data.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default pricecard
