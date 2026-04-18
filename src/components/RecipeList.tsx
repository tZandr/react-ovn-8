import RecipeCard from "./RecipeCard";
import type { RecipeData } from "../types/RecipeData";

export default function RecipeList({ recipes }: { recipes: RecipeData[] }) {
  return (
    <div className="RecipeList">
      <h2>Recept</h2>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
