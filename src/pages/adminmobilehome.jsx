import "../styles/adminmobilehome.css"
import { Link } from 'react-router-dom'

const AdminHomeMobile = () => {
  return (
    <>
      <div className='user-detail-admin-mobile'>
      <div className="profile-picture-admin-mobile"></div>
        <div className="profile-details-admin-mobile">
            <div className="profile-name-admin-mobile">Full Name</div>
            <div className="profile-location-admin-mobile">Location</div>
        </div>
      </div>

      <div className='search-admin-mobile'>
        <div className='search-container-admin-mobile'>
          <div className='input-container-admin-mobile'>
            <input id='batch-number' type='text' placeholder='Ref number' />
          </div>
          <div className='search-btn-admin-mobile'></div>
        </div>
      </div>

      <div className='recents-admin-mobile'>
        <div className='recents-label-admin-mobile'>
            <label>Upcoming</label>
            <span>See All</span>
        </div>
        <div className='batch-display-home-admin-mobile'>
          <div className='batch-details-admin-mobile'>
            <h2>Batch no.</h2>
            <h3>Current Location</h3>
            <p>Location</p>
            <h3>Status</h3>
            <p>status</p>
          </div>
          <div className='batch-display-color-admin-mobile' />
        </div>

        <div className='feature-container-admin-mobile'>
        <label>Features</label>
        <div className='features-admin-mobile'>
          <a href="/ongoingshipments" className="feature-admin-mobile">Ongoing Shipments</a>
          <a href="/confirmorder" className="feature-admin-mobile">Confirm Order</a>
          <a href="/shippinghistory" className="feature-admin-mobile">Order History</a>
        </div>
      </div>
      </div>
    </>
  )
}

export default AdminHomeMobile;