import { Link } from "react-router-dom";

const Sports = () => {
  return (
    <div className="sports d-flex justify-content-between align-items-center px-4 py-2 services">
      <Link className=" d-flex flex-column justify-content-center text-center">
        <p className="m-0">
          <img
            className="sports-icons"
            src="https://p7.hiclipart.com/preview/33/272/1000/football-ball-game-clip-art-soccer-ball-photo-png.jpg"
          />
        </p>
        <p>Soccer</p>
      </Link>

      <Link className=" d-flex flex-column justify-content-center text-center">
        <p className="m-0">
          <img
            className="sports-icons"
            src="https://img.favpng.com/16/6/10/rugby-union-emoji-rugby-league-rugby-ball-png-favpng-bx42EdQZuYYXm4Rza1X3VswUU.jpg"
          />
        </p>
        <p>Rugby</p>
      </Link>

      <Link className=" d-flex flex-column justify-content-center text-center">
        <p className="m-0">
          <img
            className="sports-icons"
            src="https://lh3.googleusercontent.com/proxy/g1ppQZrWGhk3HMzQI1F8CbIqaYNRVMrUS43BfTWzNxh98ycJfw8qEDu-jEF5Iy6TDv4dxkBp_gUam-KNR-cKN5y_ntG59Ev6CrjjLi9cCCemlKhWdCqwy7xZCmNB3TkuH6XQkNVm_w"
          />
        </p>
        <p>Tenis</p>
      </Link>
      <Link className=" d-flex flex-column justify-content-center text-center">
        <p className="m-0">
          <img
            className="sports-icons"
            src="https://p1.hiclipart.com/preview/197/874/460/cricket-ball-sports-pictures-romance-novel-sunrisers-hyderabad-book-amazon-kindle-cartoon-drawing-png-clipart.jpg"
          />
        </p>
        <p>Cricket</p>
      </Link>
      <Link className=" d-flex flex-column justify-content-center text-center">
        <p className="m-0">
          <img
            className="sports-icons"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_RaAtSqNV4N3WbUYFEJMZZoTRWa5-LXM7w&usqp=CAU"
          />
        </p>
        <p>Basketball</p>
      </Link>
    </div>
  );
};

export default Sports;
