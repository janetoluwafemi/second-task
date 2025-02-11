import React from 'react';
import './style/Index.css'
import image from './images/download.jpeg'

function Index() {
    return (
        <div className="container">
            <div className="wrapper">
                <img src={image} alt="omelette image"/>

                <div className="intro">
                    <h1>Simple Omelette Recipe</h1>
                    <p>
                        An easy and quick dish, perfect for any meal. This classic omelette
                        combines beaten eggs cooked to perfection, optionally filled with
                        your choice of cheese, vegetables, or meats.
                    </p>

                    <div className="prepTime">
                        <p>Preparation time</p>
                        <ul>
                            <li>
                                <strong>Total:</strong> <span>Approximately 10 minutes</span>
                            </li>
                            <li><strong>Preparation:</strong> <span>5 minutes</span></li>
                            <li><strong>Cooking:</strong> <span>5 minutes</span></li>
                        </ul>
                    </div>

                    <div className="ingredients">
                        <p>Ingredients</p>
                        <ul>
                            <li>2-3 large eggs</li>
                            <li>Salt, to taste</li>
                            <li>Pepper, to taste</li>
                            <li>1 tablespoon of butter or oil</li>
                            <li>
                                Optional fillings: cheese, diced vegetables, cooked meats, herbs
                            </li>
                        </ul>
                    </div>

                    <hr/>

                    <div className="instructions">
                        <p>Instructions</p>
                        <ol>
                            <li>
                                <strong className="egg">Beat the eggs:</strong
                                ><span
                            >In a bowl, beat the eggs with a pinch of salt and pepper
                  until they are well mixed. You can add a tablespoon of water
                  or milk for a fluffier texture.</span
                            >
                            </li>
                            <li>
                                <strong className="heat">Heat the pan:</strong
                                ><span className="span1"
                            >Place a non-stick frying pan over medium heat and add butter
                  or oil.</span
                            >
                            </li>
                            <li>
                                <strong>Cook the omelette:</strong
                                ><span
                            >Once the butter is melted and bubbling, pour in the eggs.
                  Tilt the pan to ensure the eggs evenly coat the surface.</span
                            >
                            </li>
                            <li>
                                <strong>Add fillings (optional):</strong
                                ><span
                            >When the eggs begin to set at the edges but are still
                  slightly runny in the middle, sprinkle your chosen fillings
                  over one half of the omelette.</span
                            >
                            </li>
                            <li>
                                <strong>Fold and serve:</strong
                                ><span
                            >As the omelette continues to cook, carefully lift one edge
                  and fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.</span
                            >
                            </li>
                            <li>
                                <strong className="enjoy">Enjoy:</strong
                                ><span className="span"
                            >Serve hot, with additional salt and pepper if needed.</span
                            >
                            </li>
                        </ol>
                    </div>

                    <hr/>

                    <strong className="nutrition">
                        <p className="firstP">Nutrition</p>
                        <p className="secondP">
                            The table below shows nutritional values per serving without the
                            additional fillings.
                        </p>
                        <div className="table">
                            <table>
                                <tbody>
                                <tr>
                                    <td>Calories</td>
                                    <td className="Calories">277kcal</td>
                                </tr>
                                <tr>
                                    <td>Carbs</td>
                                    <td className="Carbs">0g</td>
                                </tr>
                                <tr>
                                    <td>Protein</td>
                                    <td className="Protein">20g</td>
                                </tr>
                                <tr>
                                    <td>Fat</td>
                                    <td className="Fat">22g</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </strong>
                </div>
            </div>
        </div>
    )

}

export default Index;

