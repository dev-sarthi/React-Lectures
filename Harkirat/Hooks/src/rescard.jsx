function ResCard({ resdata }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', margin: '8px 0' }}>
      <p><strong>Name:</strong> {resdata.name}</p>
      <p><strong>Cuisine:</strong> {resdata.cuisine}</p>
      <p><strong>Price:</strong> {resdata.price}</p>
      <p><strong>Rating:</strong> {resdata.rating}</p>
    </div>
  );
}

export default ResCard;