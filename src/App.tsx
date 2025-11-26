import { useState } from 'react';
import type { Plant } from './type';
import PlantList from './assets/components/PlainList';
import PlantCard from './assets/components/PlantCard';
import PlantForm from './assets/components/PlantForm';

interface AppProps {
  plants: Plant[];
}

function App({ plants }: AppProps) {
  // State to track which plant is selected. Default to the first one.
  const [selectedId, setSelectedId] = useState<number>(plants[0]?.id || 1);

  // Find the full object of the selected plant
  const selectedPlant = plants.find((p) => p.id === selectedId);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🌿 Mini Nursery Inventory</h1>
      
      {/* Search Input (UI Only) */}
      <div className="mb-4">
        <input 
            type="text" 
            className="form-control" 
            placeholder="Search for a plant..." 
            disabled 
        />
      </div>

      <div className="row">
        {/* Left Column: Plant List */}
        <div className="col-md-4">
          <PlantList 
            plants={plants} 
            selectedId={selectedId} 
            onSelect={setSelectedId} 
          />
        </div>

        {/* Right Column: Form and Card */}
        <div className="col-md-8">
            <PlantForm />
            {selectedPlant && <PlantCard plant={selectedPlant} />}
        </div>
      </div>
    </div>
  );
}

export default App;