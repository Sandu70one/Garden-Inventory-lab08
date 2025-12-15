import React, { useState } from 'react';
import { Plant } from '../types/Plant';

interface PlantFormProps {
    onAdd: (plant: Omit<Plant, 'id'>) => void;
}

const PlantForm: React.FC<PlantFormProps> = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        scientificName: '',
        difficulty: 'Easy' as Plant['difficulty'],
        light: 'Medium' as Plant['light'],
        water: 'Medium' as Plant['water'],
        rarity: 'Common' as Plant['rarity'],
        description: '',
    });

    const [errors, setErrors] = useState({ name: '' });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (name === 'name' && value) {
            setErrors({ name: '' });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation: Name is required
        if (!formData.name.trim()) {
            setErrors({ name: 'Name is required' });
            return;
        }

        onAdd(formData);

        // Clear form
        setFormData({
            name: '',
            scientificName: '',
            difficulty: 'Easy',
            light: 'Medium',
            water: 'Medium',
            rarity: 'Common',
            description: '',
        });
        setErrors({ name: '' });
    };

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title mb-3">Add New Plant</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name *
                        </label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="scientificName" className="form-label">
                            Scientific Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="scientificName"
                            name="scientificName"
                            value={formData.scientificName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="difficulty" className="form-label">
                            Difficulty
                        </label>
                        <select
                            className="form-select"
                            id="difficulty"
                            name="difficulty"
                            value={formData.difficulty}
                            onChange={handleChange}
                        >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="light" className="form-label">
                            Light
                        </label>
                        <select
                            className="form-select"
                            id="light"
                            name="light"
                            value={formData.light}
                            onChange={handleChange}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="Bright">Bright</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="water" className="form-label">
                            Water
                        </label>
                        <select
                            className="form-select"
                            id="water"
                            name="water"
                            value={formData.water}
                            onChange={handleChange}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="rarity" className="form-label">
                            Rarity
                        </label>
                        <select
                            className="form-select"
                            id="rarity"
                            name="rarity"
                            value={formData.rarity}
                            onChange={handleChange}
                        >
                            <option value="Common">Common</option>
                            <option value="Uncommon">Uncommon</option>
                            <option value="Rare">Rare</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows={3}
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                        Add Plant
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PlantForm;
