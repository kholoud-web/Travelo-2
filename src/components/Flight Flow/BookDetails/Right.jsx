import "./right.css";

const Right = () => {
  return (
    <div className="flight-wrapper">

    <svg xmlns="http://www.w3.org/2000/svg"  className="line" width="274" height="125" viewBox="0 0 274 125" fill="none">
  <path d="M1.20508 124C26.9339 68.9937 97.9101 -31.2601 273.576 11.7692" stroke="#27A599" stroke-width="2.66161" stroke-dasharray="5.32 5.32"/>
</svg>

      {/* Left Circle أسفل الشمال */}
      <div className="left-circle">
        <div className="card" style={{ bottom: "90px" }}>
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=40" alt="" />
          <div>
            <h4>James Doe</h4>
            <p>Boarding Pass N123</p>
          </div>
        </div>

        <div className="dots" />
      </div>

      {/* Right Circle أعلى اليمين */}
      <div className="right-circle">
        <div className="card" style={{ bottom: "90px" }}>
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=40" alt="" />
          <div>
            <h4>James Doe</h4>
            <p>Boarding Pass N123</p>
          </div>
        </div>

        <div className="dots" />
      </div>

    </div>
  );
};

export default Right;
