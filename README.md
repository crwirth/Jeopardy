# Jeopardy Game

Using jQuery and AJAX, I built a small, straightforward Jeopardy game.

I used the jService API, which provides categories and clues from the televised Jeopardy show.

## Funcationality

- The game board consists of 6 categories across, 5 question down, displayed in a table. Above this is a header row with the name of each category.
- At the start of the game, the application randomly pick 6 categories from the jService API. For each category, the application randomly selects 5 questions for that category.
- When the user clicks on a visible question on the board, it reveals the answer (if they click on a visible answer, nothing should happen)
- When the user clicks the “Restart” button at the bottom of the page, it should load new categories and questions.

## Screenshot of Application

![Application Image](https://github.com/crwirth/Jeopardy/blob/master/Screen%20Shot%202020-02-10%20at%2012.41.33%20PM.png)

You can access and play the application here: 

https://crwirth.github.io/Jeopardy/?
