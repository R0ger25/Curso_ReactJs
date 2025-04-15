const Client = ({ nome, dataNascimento, email, telefone, foto }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        {/* Imagem do cliente */}
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <img 
            src={foto} 
            alt={`Foto de ${nome}`} 
            className="card-img-top"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x200?text=Sem+Foto';
            }}
          />
        </div>

        {/* Corpo do cartão com dados */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{nome}</h5>
          <p className="card-text mb-1"><strong>Email:</strong> {email}</p>
          <p className="card-text mb-1"><strong>Telefone:</strong> {telefone}</p>
          <p className="card-text"><strong>Nascimento:</strong> {dataNascimento}</p>
        </div>

        {/* Rodapé do cartão */}
        <div className="card-footer text-center">
          <button className="btn btn-outline-primary w-100">
            <i className="bi bi-person-lines-fill me-2"></i>
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
