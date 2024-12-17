import React, { useState } from 'react';

function GestionClient() {
  // Exemple de données clients (à remplacer par vos données depuis une API ou une base de données)
  const [clients, setClients] = useState([
    { id: 1, firstName: 'Ihab', lastName: 'Mansouri', email: 'ihab@example.com' },
    { id: 2, firstName: 'Amine', lastName: 'Hassan', email: 'amine@example.com' },
    { id: 3, firstName: 'Sarah', lastName: 'El Fassi', email: 'sarah@example.com' },
    { id: 4, firstName: 'Karim', lastName: 'Bouzid', email: 'karim@example.com' },
  ]);

  // États pour les champs de filtrage
  const [filter, setFilter] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Fonction pour gérer les changements dans les champs de filtrage
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  // Fonction pour supprimer un client
  const handleDelete = (id) => {
    setClients((prevClients) => prevClients.filter((client) => client.id !== id));
    alert(`Client avec l'ID ${id} supprimé.`);
  };

  // Fonction pour mettre à jour un client
  const handleUpdate = (id) => {
    alert(`Mettre à jour le client avec l'ID ${id}`);
    // Ici, vous pouvez ajouter la logique pour ouvrir un formulaire de mise à jour.
  };

  // Filtrage des clients en fonction des champs de recherche
  const filteredClients = clients.filter((client) =>
    client.firstName.toLowerCase().includes(filter.firstName.toLowerCase()) &&
    client.lastName.toLowerCase().includes(filter.lastName.toLowerCase()) &&
    client.email.toLowerCase().includes(filter.email.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestion des Clients</h1>

      {/* Barre de filtrage */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Filtrer les Clients</h3>
        <input
          type="text"
          name="firstName"
          placeholder="Filtrer par Prénom"
          value={filter.firstName}
          onChange={handleFilterChange}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Filtrer par Nom"
          value={filter.lastName}
          onChange={handleFilterChange}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          name="email"
          placeholder="Filtrer par Email"
          value={filter.email}
          onChange={handleFilterChange}
          style={{ marginRight: '10px', padding: '5px' }}
        />
      </div>

      {/* Liste des clients filtrés */}
      <table border="1" width="100%" cellPadding="10" style={{ textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th> {/* Colonne pour les boutons */}
          </tr>
        </thead>
        <tbody>
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
                <td>{client.email}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(client.id)}
                    style={{
                      marginRight: '10px',
                      padding: '5px 10px',
                      backgroundColor: 'blue',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                Aucun client trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GestionClient;
