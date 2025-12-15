import React from 'react';
import { Plant } from '../types/Plant';

interface PlantListProps {
    plants: Plant[];
    selectedId: number | null;
    onSelect: (id: number) => void;
}

const PlantList: React.FC<PlantListProps> = ({ plants, selectedId, onSelect }) => {
    return (
        <div className="list-group">
            {plants.length === 0 ? (
                <div className="list-group-item text-muted">No plants available</div>
            ) : (
                plants.map((plant) => (
                    <button
                        key={plant.id}
                        type="button"
                        className={`list-group-item list-group-item-action ${
                            plant.id === selectedId ? 'bg-success text-white' : ''
                        }`}
                        onClick={() => onSelect(plant.id)}
                    >
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">{plant.name}</h6>
                        </div>
                        <small className={plant.id === selectedId ? 'text-white' : 'text-muted'}>
                            {plant.scientificName}
                        </small>
                    </button>
                ))
            )}
        </div>
    );
};

export default PlantList;
