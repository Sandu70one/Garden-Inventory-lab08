import type { Plant } from '../../type';

interface PlantListProps {
  plants: Plant[];
  selectedId: number;
  onSelect: (id: number) => void;
}

const PlantList = ({ plants, selectedId, onSelect }: PlantListProps) => {
  return (
    <div className="list-group">
      {plants.map((plant) => (
        <div
          key={plant.id}
          className={`list-group-item list-group-item-action ${
            plant.id === selectedId ? 'active' : ''
          }`}
          onClick={() => onSelect(plant.id)}
          style={{ cursor: 'pointer' }}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{plant.name}</h5>
            <small>{plant.rarity && <span className="badge bg-warning text-dark">{plant.rarity}</span>}</small>
          </div>
          <p className="mb-1 fst-italic">{plant.scientific}</p>
          <small className="badge bg-secondary">{plant.difficulty}</small>
        </div>
      ))}
    </div>
  );
};

export default PlantList;