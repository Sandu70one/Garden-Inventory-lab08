import React from 'react';
import { Plant } from '../types/Plant';

interface PlantCardProps {
    plant: Plant;
    onDelete: (id: number) => void;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onDelete }) => {
    const handleViewDetails = () => {
        alert(`Viewing details for: ${plant.name}\n\nScientific Name: ${plant.scientificName}\nDifficulty: ${plant.difficulty}\nLight: ${plant.light}\nWater: ${plant.water}\nRarity: ${plant.rarity}\n\nDescription: ${plant.description}`);
    };

    const getBadgeColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy':
                return 'success';
            case 'Medium':
                return 'warning';
            case 'Hard':
                return 'danger';
            default:
                return 'secondary';
        }
    };

    const getRarityBadgeColor = (rarity: string) => {
        switch (rarity) {
            case 'Common':
                return 'secondary';
            case 'Uncommon':
                return 'info';
            case 'Rare':
                return 'danger';
            default:
                return 'secondary';
        }
    };

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{plant.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{plant.scientificName}</h6>

                <div className="mb-3">
                    <span className={`badge bg-${getBadgeColor(plant.difficulty)} me-2`}>
                        Difficulty: {plant.difficulty}
                    </span>
                    <span className={`badge bg-${getRarityBadgeColor(plant.rarity)}`}>
                        Rarity: {plant.rarity}
                    </span>
                </div>

                <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                        <span className="me-2">☀️</span>
                        <span>Light: {plant.light}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="me-2">💧</span>
                        <span>Water: {plant.water}</span>
                    </div>
                </div>

                <p className="card-text">{plant.description}</p>

                <div className="d-grid gap-2">
                    <button
                        className="btn btn-primary"
                        onClick={handleViewDetails}
                    >
                        View Details
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => onDelete(plant.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;
