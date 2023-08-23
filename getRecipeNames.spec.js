const { getRecipesFromMarkdownFile } = require("./getRecipeNames");

describe("getRecipesFromMarkdownFile", () => {
  it("should return an array of recipe names", () => {
    // Arrange
    const example = `
# Recipes

## Spaghetti Carbonara

### Ingredients

- 1 pound spaghetti
- 1/2 pound pancetta or bacon, diced
- 4 garlic cloves, finely chopped
- 2 large eggs
- 1 cup freshly grated Parmesan cheese
- Freshly ground black pepper

### Directions

1. Cook spaghetti in a large pot of boiling salted water until al dente.
2. Meanwhile, sauté pancetta in a large skillet over medium heat until crisp.
3. Add garlic and sauté for 1 minute.
4. In a small bowl, whisk together eggs and Parmesan cheese.
5. Drain spaghetti, reserving 1 cup of pasta cooking water.
6. Add spaghetti to skillet and toss with pancetta and garlic.
7. Remove skillet from heat and add egg mixture, tossing quickly to avoid scrambling the eggs.
8. Add pasta cooking water as needed to create a creamy sauce.
9. Season with black pepper and serve immediately.

## Caesar Salad

### Ingredients

- 1 head romaine lettuce, washed and dried
- 1/2 cup croutons
- 1/4 cup freshly grated Parmesan cheese
- 1/4 cup olive oil
- 2 tablespoons lemon juice
- 1 garlic clove, minced
- 1 teaspoon Dijon mustard
- Salt and freshly ground black pepper

### Directions

1. Tear lettuce into bite-sized pieces and place in a large bowl.
2. Add croutons and Parmesan cheese.
3. In a small bowl, whisk together olive oil, lemon juice, garlic, and Dijon mustard.
4. Season with salt and pepper.
5. Drizzle dressing over salad and toss to combine.
6. Serve immediately.
`;

    // Act
    const recipeNames = getRecipesFromMarkdownFile(example);

    // Assert
    expect(recipeNames).toEqual(["Spaghetti Carbonara", "Caesar Salad"]);
  });

  it("Should throw an error if the list of recipes is empty", async () => {
    // Arrange
    const example = `
    # Recipes
    `;

    // Act
    const recipeNames = async () => getRecipesFromMarkdownFile(example);

    // Assert
    await expect(recipeNames()).rejects.toThrow(
      "No recipes found in file, hello meetup!"
    );
  });

  
});
