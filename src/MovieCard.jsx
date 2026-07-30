import "./MovieCard.css";
import { findCheapest } from "./utils";

function MovieCard({ providers, title, poster }) {
  return (
    <div className="movie-card" data-testid={"movie-card-" + title}>
      <div className="movie-card-header">
        <h3 className="movie-title">{title}</h3>
      </div>
      <div className="movie-card-content">
        <img src={poster} className="poster"></img>
        <div className="movie-card-details">
          <div>
            <div className="movie-card-details-header">
              <p>Cheapest at</p>
              <p className="cheapest-name">
                {findCheapest(providers).providerName}
              </p>
            </div>
            <p className="cheapest-price">${findCheapest(providers).price}</p>
          </div>

          <div className="footer">
            <h4>All Providers</h4>
            {providers.map((provider) => {
              return (
                <div key={provider.providerName} className="provider-row">
                  <p className="movie-card-provider-name">
                    {provider.providerName}
                  </p>
                  <p>${provider.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
