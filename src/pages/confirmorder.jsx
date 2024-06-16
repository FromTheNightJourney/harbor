import "../styles/confirmorder.css" 
import { Link } from 'react-router-dom'

function NewBatch() {
  const arr = []
  return (
    <>
      <div className='admin-mobile-confirm-header'>
        <a href='/' className="back-btn">Back</a>
        <h2>New Batch</h2>
      </div>

      <div className='batch-edit-admin-mobile-confirm'>
          <div className='detail-form-admin-mobile-confirm'>
            <h2>Wet leaves</h2>
            <h3>Shipping ID</h3>
            <span>Shipping ID here</span>
            <h3>Date</h3>
            <input type='date' placeholder='Weight (in kg)' />
            <h3>Weight</h3>
            <input type='text' placeholder='Weight (in kg)' />
            <h3>Reception Notes</h3>
            <textarea type='text' rows={5} placeholder='Weight (in kg)' />
          </div>
          <div className='image-upload-admin-mobile-confirm-container'>
            <h3>Upload Images</h3>
            <div className='image-upload-admin-mobile-confirm'></div>
          </div>
          <div className='batch-buttons-admin-mobile-confirm'>
            <div className='batch-btn-admin-mobile-confirm'>Add Batch</div>
          </div>
      </div>
    </>
  )
}

export default NewBatch