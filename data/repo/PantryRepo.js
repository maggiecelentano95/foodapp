import mockPantry from "./../mockdata/MockPantry"
import Food from "./../Food"

var getPantry = (username) => {
    return (
        mockPantry.map((food,i)=>new Food(food.name,food.type,food.expiration))
    );
  };

export default {getPantry: getPantry};