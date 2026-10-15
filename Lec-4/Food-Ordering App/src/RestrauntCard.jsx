const RestaurantCard = ({ resdata }) => {
  console.log(resdata);
  return (
    <div className='res-card'>
      <img src={resdata.image} alt={resdata.name} />
      <h3>{resdata.name}</h3>
      <h4>{resdata.cuisines}</h4>
      <h4>{resdata.location}</h4>
      <h4>Rating: {resdata.rating}</h4>
      <h4>{resdata.deliveryTime} Minutes</h4>
    </div>

  );
};


export default RestaurantCard;
