const Odds = () => {
  return (
    <div className="grid-container m-0 p0">
      <div className="betting-teams item1 border-bottom">
        <p className="m-0 p-0 teams">Barcelona vs Real madrid</p>
        <p className="m-0 p-0 competition-name">La Liga Santander</p>
      </div>
      <div className="betting-odds item2 d-flex">
        <li className="left-team">
          <a href="#" className="team-link">
            <span className="team-name">Barcelona</span>
            <span className="team-odd">3</span>
          </a>
        </li>

        <li className="draw">
          <a href="#" className="team-link">
            <span className="team-name">Draw</span>
            <span className="team-odd">5</span>
          </a>
        </li>

        <li className="right-team">
          <a href="#" className="team-link">
            <span className="team-name">Real Madrid</span>
            <span className="team-odd">1.2</span>
          </a>
        </li>
      </div>
      <div className="betting-options item3 d-flex justify-content-center">
        <li className="p-0" className="options-link mr-1">
          <a href="#">
            <i className="fas fa-chart-pie"></i>
          </a>
        </li>
        <li className="options-link">
          <a href="#" className="more-bets">
            Bets
          </a>
        </li>
      </div>
    </div>
  );
};

export default Odds;
