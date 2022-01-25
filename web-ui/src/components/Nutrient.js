import React from 'react';
import axios from 'axios';

import '../less/global.less';
import '../less/user.less';
export default class Users extends React.Component {

  state = {
    user: {},
    userFoods: [],
    nutrients: []
  }

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/users/${this.props.match.params.userId}`).then((response) => {
      this.setState({user: response.data});
    })
    const resp = axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/users/${this.props.match.params.userId}/foods`);

    this.findAlldatails(resp).then((response) => {
      this.setState({nutrients: response});
    });
  }

  async findAlldatails(foods) {
    let foodResponse = await foods;
    let data = foodResponse.data;
    //let maxFoodServing = this.findMaxValue(data, data.servingsPerWeek);
    let maxFoodServing = data.reduce((data,b)=>data.servingsPerWeek>b.servingsPerWeek?data:b); 
    let maxNutrientServing = await this.findMaxNutrientAmount(maxFoodServing['foodId']);
    let nutrientDetails = await this.getNutrientDetails(maxNutrientServing['nutrientId']);
    let weeklyAmount = (maxNutrientServing.amountPerServing * maxFoodServing.servingsPerWeek);
    nutrientDetails.weeklyAmount = weeklyAmount
    nutrientDetails.foodId = maxFoodServing['foodId']
    return nutrientDetails;
  }

  async findMaxNutrientAmount(id) {
    let nutrientResponse = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/foodNutrients/${id}`);
    let data = nutrientResponse.data;
    let maxNutrientServing = data.reduce((data,b)=>data.amountPerServing>b.amountPerServing?data:b); 
    return maxNutrientServing;
  }

  async getNutrientDetails(nutrientId) {
    let nutrientDetails = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/nutrientsDetails/${nutrientId}`);
    return nutrientDetails.data;
  }
 
  render() {
    
    return (
      <div>
        <p>
        id: {this.state.nutrients.id} <br />
        name: {this.state.nutrients.name}  <br />
        unitName: {this.state.nutrients.unitName}  <br />
        weekly Amount: {this.state.nutrients.weeklyAmount}  <br />
        </p>
      </div>
    )
  }
}
