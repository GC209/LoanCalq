import LoanTile from '../LoanTile/LoanTile';

import './TileContainer.css';

const TileContainer = () => {
  return (
    <div className="tile-container">
      <LoanTile title='Personal Loan' description='Click on the tile to calculate personal loan' />
    </div>
  );
};

export default TileContainer;