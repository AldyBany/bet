const Navbar = () => {
  return (
    <nav className="container-fluid d-flex justify-content-between align-items-center bg-dark text-light py-3 px-4">
      <div className="left-content d-flex align-items-center">
        <div className="mr-5 menu-icon">
          <i class="fas fa-bars"></i>
          <p>MENU</p>
        </div>
        <h2 className="md-h1">betway</h2>
      </div>

      <div className="middle-content">
        <div class="input-group">
          <button type="button" class="btn btn-success">
            +27
          </button>
          <div class="form-outline tel">
            <input type="search" id="form1" class="form-control bg-light" />
            <label class="form-label" for="form1">
              623678120
            </label>
          </div>

          <div class="form-outline tel">
            <input type="search" id="form1" class="form-control bg-light" />
            <label class="form-label" for="form1">
              Password
            </label>
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="buttons d-flex align-items-center">
          <button className="btn btn-success">Login</button>
          <button className="btn btn-success mx-2">Sign Up</button>
          <button className="btn btn-success">Betslip</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
