import { useState } from 'react';
import type { RecipeData } from '../types/RecipeData';

interface RecipeFormProps {
  onAddRecipe: (recipe: RecipeData) => void;
}

export default function RecipeForm({ onAddRecipe }: RecipeFormProps ) {
  const [recipeName, setRecipeName] = useState<string>('');
  const [ingredients, setIngredients] = useState<string>('');
  const [cookingTime, setCookingTime] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('Recipe Name:', recipeName);
    console.log('Ingredients:', ingredients);
    console.log('Cooking Time:', cookingTime);

    onAddRecipe({ recipeName, ingredients, cookingTime });

    setRecipeName('');
    setIngredients('');
    setCookingTime('');
  }

  return (
    <div>
      <h1>Recipe Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipeName">Recipe Name:</label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="cookingtime">Cooking Time:</label>
          <input
            type="text"
            id="cookingtime"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
          />
        </div>
        <button id="addRecipeButton" type="submit">
          Lägg till recept
        </button>
      </form>
    </div>
  );
}
