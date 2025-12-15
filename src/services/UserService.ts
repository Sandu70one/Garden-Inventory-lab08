import axios from 'axios';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const UserService = {
    async getUsers(): Promise<User[]> {
        try {
            const response = await axios.get<User[]>(API_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },

    async getUser(id: number): Promise<User> {
        try {
            const response = await axios.get<User>(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching user ${id}:`, error);
            throw error;
        }
    },
};
