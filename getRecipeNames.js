const path = require('path')
// Description: Gets the recipe names from a markdown file RECIPE.md
// All second headers are recipes

function readFile(filePath) {
  const fs = require('fs')
  return fs.readFileSync(filePath, 'utf8')
}
function getRecipesFromMarkdownFile(fileContent) {
  const regex = /^## (.*)$/gm
  const matches = fileContent.match(regex)
  if (!matches) {
    throw new Error("No recipes found in file, hello meetup!")
  }
  const recipeNames = matches.map(match => match.replace('## ', ''))

  return recipeNames
}

module.exports = {
  getRecipesFromMarkdownFile,
  readFile
}