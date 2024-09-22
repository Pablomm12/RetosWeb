import ProgressBar from 'react-bootstrap/ProgressBar';
import './ProgressBar.css';
import React, { useState } from 'react';

function Progress() {
  const [now, setNow] = useState(60);

  const handleChange = (event) => {
    setNow(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: '60rem' }}>
        <div className="card-body">
          <ProgressBar now={now} label={`${now}%`} />
          <form>
            <label>
              Input percentage:
              <input type="number" value={now} onChange={handleChange} className="form-control" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Progress;