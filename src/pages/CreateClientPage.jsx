import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clientService from '../services/clientService';

const CreateClientPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    date_birth: '',
    email: '',
    telephone: '',
    profile_photo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await clientService.createClient(formData);
      navigate('/clientes'); // Redireciona para lista de clientes
    } catch (error) {
      setErrorMsg('Erro ao criar cliente. Tente novamente.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Novo Cliente</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Data de Nascimento</label>
          <input
            type="date"
            className="form-control"
            name="date_birth"
            value={formData.date_birth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Foto de Perfil (URL)</label>
          <input
            type="url"
            className="form-control"
            name="profile_photo"
            value={formData.profile_photo}
            onChange={handleChange}
            required
          />
        </div>

        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Salvando...' : 'Criar Cliente'}
        </button>
      </form>
    </div>
  );
};

export default CreateClientPage;