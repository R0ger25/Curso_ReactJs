import Client from "./Client";

const ClientsGrid = ({ title, items, cols = 4 }) => {
  const colClass = `row-cols-1 row-cols-md-${Math.max(1, Math.floor(cols / 2))} row-cols-lg-${cols}`;

  if (!items || items.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        Nenhum cliente encontrado.
      </div>
    );
  }

  return (
    <section className="mb-4">
      {title && (
        <>
          <h2>{title}</h2>
          <hr />
        </>
      )}
      <div className={`row ${colClass} g-3`}>
        {items.map((client) => (
          <Client
            key={client.id}
            nome={client.name}                       // name → nome
            dataNascimento={client.date_birth}       // date_birth → dataNascimento
            email={client.email}
            telefone={client.telephone}
            foto={client.profile_photo}              // profile_photo → foto
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsGrid;
