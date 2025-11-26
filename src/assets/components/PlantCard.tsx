import type { Plant } from '../../type';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  
  // Helper to generate Light icons
  const getLightIcons = (level: string) => {
    if (level === 'Low') return '☁️';
    if (level === 'Medium') return '🌤️';
    return '☀️';
  };

  // Helper to generate Water icons
  const getWaterIcons = (level: string) => {
    if (level === 'Low') return '💧';
    if (level === 'Moderate') return '💧💧';
    return '💧💧💧';
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">
          {plant.name} <small className="text-muted fs-6">({plant.scientific})</small>
        </h2>
        
        <div className="mb-3">
            <span className="badge bg-info text-dark me-2">Difficulty: {plant.difficulty}</span>
            {plant.rarity && <span className="badge bg-warning text-dark">Rarity: {plant.rarity}</span>}
        </div>

        <p className="card-text">{plant.description}</p>

        <div className="row mb-3">
            <div className="col-6">
                <strong>Light:</strong> {getLightIcons(plant.light)} ({plant.light})
            </div>
            <div className="col-6">
                <strong>Water:</strong> {getWaterIcons(plant.water)} ({plant.water})
            </div>
        </div>

        <button className="btn btn-primary me-2" disabled>View</button>
        <button className="btn btn-success" disabled>Buy</button>
      </div>
    </div>
  );
};

export default PlantCard;