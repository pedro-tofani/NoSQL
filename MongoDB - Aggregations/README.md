## Challenges

Build queries to find the information for the following challenges.

##### Challenge 1

Help Trybe choose a movie for the next night! Based on a survey, we decided that potential films must meet the following criteria:

- `imdb.rating` must be at least `7`;
- `genres` must not contain `Crime` or `Horror`;
- `rated` must be equal to `PG` or `G`;
- `languages` contains `English` and `Spanish`.

Using the `movies` collection, make a _pipeline_ that returns all these movies.

Your query should return `41` documents.

##### Challenge 2

The choice of movie of the night was a success, but unfortunately we were left with our internet bandwidth almost exhausted, and we still need a new movie recommendation. To reduce the volume of data trafficked, using the same _pipeline_ as before, return only the `title`, `rated`, `imdb.rating`, `imdb.votes` and `year` fields, changing their names to `title`, `rated`, `IMDB grade`, `IMDB votes` and `year`, respectively.

The result of your query should have the following format:

```javascript
{ "title" : "A Streetcar Named Desire", "rated" : "PG", "IMDB rating" : 8.1, "IMDB votes" : 72364, "year" : 1951 }
// Other documents
```

##### Challenge 3

Now that you have the essential fields, return these movies sorted by year and IMDB rating in descending alphabetical order.

The result of your query should have the following format:

```javascript
{ "title" : "McFarland, USA", "rated" : "PG", "IMDB rating" : 7.5, "IMDB votes" : 14091, "year" : 2015 }
// Other documents
```

##### Challenge 4

Our movies dataset has many different documents, some with "more complex" titles than others. If we wanted to analyze our collection to find movie titles that have a single word in the title, we could fetch all the movies in the dataset and process that in the application, but the `Aggregation Framework` allows us to do this directly on the database side.

Create a _pipeline_ that returns only movies with a single-word title. For example, `"Cinderella"` and `"3-25"` should go into this count, but `"Cast Away"` should not.

Tip: use the `$split` and `$size` operators to help you.

Your query should return `8068` documents.

##### Challenge 5

We have another movie night here at Trybe and this time we asked the crew who their favorite actors or actresses are. Here is the result:

- Sandra Bullock
- Tom Hanks
- Julia Roberts
- Kevin Spacey
- George Clooney

For movies released in the United States (`countries` field), with `tomatoes.viewer.rating` greater than or equal to `3`, create a new field called `num_favs`, which represents how many favorite actors or actresses appear in the cast (field `cast`) of the movie.

Sort the results by `num_favs`, `tomatoes.viewer.rating` and `title`, all in descending order.

Finally, using the same _pipeline_, answer: What is the **title** of the twenty-fifth film of the result of this aggregation?

Tip: put the list of favorite actors and actresses in a variable and explore operators like `$size` and `$setIntersection`.

The result of your query should have the following format:

```javascript
{ "title" : <movie_name> }
```

##### Challenge 6

Let's explore more arithmetic operators!

Considering all films that have won an Oscar at least once, calculate the **standard deviation**, the **highest value**, the **lowest value** and the **average** of the ratings (field `imdb .rating`).

Tip: All movies in the collection that have already won an Oscar start with a string sequence similar to the ones below, so `$regex` is a welcome operator:

```
Won 10 Oscars
won 1 Oscar
```

The result of your query should have the following format:

```javascript
{
  "highest_rating" : <highest_rating>,
  "minor_rating" : <minor_rating>,
  "media_rating" : <media_rating>,
  "standard_deviation" : <standard_deviation>
}
```

##### Challenge 7

Let's delve a little deeper into our movie collection. We want to count how many movies each of the actors and actresses in the cast (`cast`) have participated in and get an average of the `imdb.rating` field for each of these actors and actresses.

Bring the name of the actor or actress, the number of films in which he participated and the average of the imdb of these films with only one decimal place. Only consider cast members of English-language films (`English`).

Your query should return `47055` documents. Each document in the output must have the following format:

```javascript
{ "_id" : "John Wayne", "numberMovies" : 107, "mediaIMDB" : 6.4 }
```

##### Challenge 8

Changing context, let's use our other dataset that contains data from airlines, their routes, their flights and partnerships.

List all partnerships from the `air_alliances` collection, which fly routes with a Boeing 747 or an Airbus A380 (which are abbreviated to `747` and `380` in the `airplane` field in the `air_routes` collection, respectively), and find out which of them has the largest number of routes with these planes.

The result of your query should have the following format:

```javascript
{ "_id" : <alliance_name>, "totalRoutes" : <total_routes> }
```

##### Challenge 9

From the `trips` collection, determine the smallest and largest year of birth. Keep this information, you will need it later.

Do not consider documents with empty values ​​(`""`) or where the field does not exist!

The result of your query should have the following format:

```javascript
{ "majorBirthYear" : <year>, "minorBirthYear" : <year> }
```

##### Challenge 10

Find the average trips by user type. Display the value in hours with only two decimal places.

The result of your query should have the following format:

```javascript
{ "type" : <type>, "averageduration" : <averageduration> }
// ...
```

##### Challenge 11

Determine which day of the week has the highest number of trips initiated.

Tip: Use the `$dayOfWeek` operator to extract the day of the week as a number from a date.

The result of your query should have the following format:

```javascript
{ "weekday" : <weekday>, "total" : <travel_total> }
```

##### Challenge 12

Now that you know the day with the most trips, determine which season has the most trips on that day of the week. But for that, add whatever you need to the previous _pipeline_. Display only the station name and total trips.

The result of your query should have the following format:

```javascript
{ "stationname" : <station_name>, "total" : <travel_total> }
```

##### Challenge 13

Determine the average duration of trips starting on `10/03/2016`, in minutes. Round the result up.

The result of your query should have the following format:

```javascript
{ "average durationInMinutes" : <average_duration_in_minutes> }
```

##### Challenge 14

Based on the average duration of trips, determine which `5` bikes were used the most. Display the result in minutes rounded up.

The result of your query should have the following format:

```javascript
{ "bikeId" : <bike_id>, "average duration" : <average_duration> }
{ "bikeId" : <bike_id>, "average duration" : <average_duration> }
{ "bikeId" : <bike_id>, "average duration" : <average_duration> }
{ "bikeId" : <bike_id>, "average duration" : <average_duration> }
{ "bikeId" : <bike_id>, "average duration" : <average_duration> }
```
