import Ads from "./Ads";
import Matches from "./Matches";
import Odds from "./Odds";
import Sports from "./Sports";

const Content = () => {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-md-2 border side">.col-md-3</div>
        <div class="col-md-8 border">
          <Ads />
          <Sports />
          <Matches />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
          <Odds />
        </div>
        <div class="col-md-2 border side">.col-md-3</div>
      </div>
    </div>
  );
};

export default Content;
