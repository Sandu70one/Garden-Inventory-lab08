const PlantForm = () => {
  return (
    <div className="card p-3 mb-4 bg-light">
      <h4>Add New Plant</h4>
      <form>
        <div className="mb-2">
          <label className="form-label">Plant Name</label>
          <input type="text" className="form-control" disabled />
        </div>
        <div className="mb-2">
          <label className="form-label">Scientific Name</label>
          <input type="text" className="form-control" disabled />
        </div>
        <div className="row mb-2">
            <div className="col">
                <label className="form-label">Difficulty</label>
                <select className="form-select" disabled>
                    <option>Easy</option>
                </select>
            </div>
            <div className="col">
                 <label className="form-label">Light</label>
                <select className="form-select" disabled>
                    <option>Low</option>
                </select>
            </div>
             <div className="col">
                 <label className="form-label">Water</label>
                <select className="form-select" disabled>
                    <option>Low</option>
                </select>
            </div>
        </div>
        <div className="mb-2">
          <label className="form-label">Description</label>
          <textarea className="form-control" disabled></textarea>
        </div>
        <button className="btn btn-secondary me-2" disabled>Clear</button>
        <button className="btn btn-success" disabled>Add Plant</button>
      </form>
    </div>
  );
};

export default PlantForm;