import React, { useState, useEffect } from 'react';
import { UserService, User } from '../services/UserService';

const PeopleDropdown: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await UserService.getUsers();
            setUsers(data);
        } catch (err) {
            setError('Failed to load users. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleUserSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const userId = parseInt(e.target.value);
        if (userId) {
            const user = users.find((u) => u.id === userId);
            setSelectedUser(user || null);
        } else {
            setSelectedUser(null);
        }
    };

    return (
        <div className="mt-4">
            <h5>People Directory</h5>

            {loading && (
                <div className="text-center my-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <>
                    <select
                        className="form-select mb-3"
                        onChange={handleUserSelect}
                        defaultValue=""
                    >
                        <option value="">Select a user...</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>

                    {selectedUser && (
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h6 className="card-title">{selectedUser.name}</h6>
                                <p className="card-text mb-1">
                                    <strong>Username:</strong> {selectedUser.username}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Email:</strong> {selectedUser.email}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Phone:</strong> {selectedUser.phone}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Website:</strong> {selectedUser.website}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Company:</strong> {selectedUser.company.name}
                                </p>
                                <p className="card-text text-muted mb-0">
                                    <small>{selectedUser.company.catchPhrase}</small>
                                </p>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default PeopleDropdown;
