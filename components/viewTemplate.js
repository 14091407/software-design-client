import React from 'react'

const ViewTemplate = props => {
  const {list} = props

  return(
    <div>
      <details>
	    <summary>
		    <span class="summary-title">
          <div>
            <div className='summary-creator'>
              <div><p>{`Creator: ${list.creator}`}</p></div>
              <div><p>{`Funding: ${list.fundingInUSD}`}</p></div>
            </div>
          </div>
        </span>
		    <div class="summary-chevron-up">
			    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
		    </div>
	    </summary>
	    <div class="summary-content">
        <div className='summary-objetive'>
          <div><p>Objectives:</p></div>
          <div><p>xxx</p></div>
        </div>
        <div className='summary-details'>
          <div><p>Telescope Location: xxx</p></div>
          <div><p>Star Systems: xxx</p></div>
          <div><p>Light Detector: xxx</p></div>
        </div>
        <div className='summary-details'>
          <div><p>Start Date: xxx</p></div>
          <div><p>End Date: xxx</p></div>
        </div>
        {/* Data Processing Requirement */}
        {/* Location Element */}
        {/* Lens */}
        {/* Filter */}
        {/* Special Equipment */}
        {/* Exposures */}
      </div>
	    <div class="summary-chevron-down">
		    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
      </div>
      </details>
    </div>
  )
}

export default ViewTemplate