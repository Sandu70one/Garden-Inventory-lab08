export interface Plant {
    id: number;
    name: string;
    scientificName: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    light: 'Low' | 'Medium' | 'Bright';
    water: 'Low' | 'Medium' | 'High';
    rarity: 'Common' | 'Uncommon' | 'Rare';
    description: string;
}
