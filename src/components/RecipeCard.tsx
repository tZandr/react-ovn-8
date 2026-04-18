import type { RecipeData } from "../types/RecipeData";

export default function RecipeCard({ recipe }: { recipe: RecipeData }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.recipeName}</h3>
      <p>{recipe.ingredients}</p>
      <small>{recipe.cookingTime}</small>
    </div>
  );
}
