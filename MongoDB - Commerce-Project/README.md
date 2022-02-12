## Challenges

Build queries to find the information for the following challenges.

##### Challenge 1

Include the `createdBy` field in all documents, putting your name in the value of this field.

##### Challenge 2

Include the `UnitValue` field in all documents where this field does not exist and assign it the value `0.00`, with the type `NumberDecimal`.

##### Challenge 3

Include the `evaluation` field of type `NumberInt` and with the value `0` in all documents in the collection.

##### Challenge 4

Increase the value of the `evaluation` field by `5` in all `beef` meat sandwiches. Tip: use the `tags` field as a filter.

##### Challenge 5

Increment the value of the `evaluation` field by `3` in all `bird` sandwiches.

##### Challenge 6

Assign the value `16.90` to the `UnitValue` field and the current date to the `lastModified` field in the `Big Mac` sandwich.

##### Challenge 7

Add `ketchup` to the `ingredients` for all sandwiches except `McChicken`, ensuring there is no duplicate `ingredient`.

##### Challenge 8

Add `bacon` to the end of the `ingredients` list of the `Big Mac` and `Block with Cheese` sandwiches.

##### Challenge 9

Remove the 'onion' item from all sandwiches.

##### Challenge 10

Remove the first `ingredient` from the `Quarterão com Queijo` sandwich.

##### Challenge 11

Remove the last `ingredient` from the `Cheddar McMelt` sandwich.

##### Challenge 12

Now, let's simulate the amount of sandwich sales per day of the week.

To do this, include an _array_ with seven positions in all sandwiches. Each of them will represent a day of the week, and each position will start at 0. The _array_ should look like this:

```json
"salesPerDay": [0, 0, 0, 0, 0, 0, 0]
```

The first item in this _array_ represents Sunday sales, while the last item represents Saturday sales. Keep this in mind because we're going to use this sequence later on.

##### Challenge 13

Increase `Big Mac` sales on Wednesdays by `60`.

##### Challenge 14

Increase sales of all `beef` and `bread` meat sandwiches on Saturdays by `120`.

##### Challenge 15

Insert the `combo` and `tasty` elements into the _array_ `tags` of all sandwiches and take the opportunity to leave the elements in ascending alphabetical order.

##### Challenge 16

Sort the elements of the _array_ `NutritionalValues` by the `percentage` field in descending order. Tip: even without adding any new element, for this operation it is also necessary to use the `$each` modifier.

##### Challenge 17

Add the `too much sodium` element to the _array_ `tags` in products where the `percent` of `sodium` is greater than or equal to `40`.

##### Challenge 18

Add the `contains sodium` element to the _array_ `tags` in products where the `percent` of `sodium` is greater than `20` and less than `40`.

##### Challenge 19

Count how many products contain `Mc` in the name, regardless of uppercase or lowercase letters.

##### Challenge 20

Count how many products have `4` ingredients.

##### Challenge 21

Create an index of type `text` in the `description` field with the default language `portuguese`.

##### Challenge 22

Count how many documents contain the words `chicken` and `hamburger` using the `$text` operator.

##### Challenge 23

Count how many documents contain the expression `made with` using the `$text` operator.

##### Challenge 24

Rename the `description` field to `Sitedescription` in all documents.

##### Challenge 25

Remove the `UnitValue` field from the `Big Mac` item.

##### Challenge 26

Return the name of the sandwiches where the number of `likes` is greater than the number of sales.

##### Challenge 27

Return the name and sales quantity of sandwiches where the sales number is a multiple of `5`.
