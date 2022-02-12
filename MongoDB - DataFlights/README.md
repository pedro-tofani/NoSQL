## Challenges

Build queries to find the information for the following challenges.

#### Challenge 1

Return all instance databases.

#### Challenge 2

Switch to the `dataFlights` database context and display all collections from that database.

#### Challenge 3

Return the number of documents inserted in the `flights` collection.

#### Challenge 4

Return the first 10 documents with flights from the company `AZUL`.

#### Challenge 5

Return the number of flights of the company `AZUL`.

#### Challenge 6

Return the number of flights operated by `GOL`.

#### Challenge 7

Return the `vooId` from the tenth to twelfth document of the `flights` collection.

#### Challenge 8

Return only the `company.acronym`, `company.name` and `passengers` fields of the flight with the `flightId` field equal to `756807`.

#### Challenge 9

Return the number of flights where the year is less than `2017`.

#### Challenge 10

Return the number of flights where the year is greater than `2016`.

#### Challenge 11

Return the number of flights between the years `2017` and `2018`.

#### Challenge 12

Return only the **10** first documents with `GOL` company flights from the year `2017`. Display only the `flightId`, `company.name`, `Source Airport.name`, `DestinationAirport.name`, `month` and `year` fields.

#### Challenge 13

Return the number of documents in which the `AeroportoDestino.country` field is not equal to `UNITED STATES`.

#### Challenge 14

Using the logical operators, count the documents in which the `aeroportoDestino.pais` field is equal to `BRASIL`, `ARGENTINA` or `CHILE`.

#### Challenge 15

Using the logical operators, count documents where the fields `aeroportoDestino.continente` are not equal to `EUROPE`, `ASIA` and `OCEANIA`.

#### Challenge 16

Return the total number of flights where the country of origin is not `BRAZIL`.

#### Challenge 17

Return total flights with more than 20 'takeoffs'.

#### Challenge 18

Return the total number of flights where the `nature` field has the value `International`.

#### Challenge 19

Return the total number of flights where the `nature` field has the value `Domestic`.

#### Challenge 20

Return the `flightId`, `month` and `year` of the first flight with over `7000` paid passengers.

#### Challenge 21

Return the `flightId` of the first flight where the `litersFuel` field exists.

#### Challenge 22

Return the `flightId` of the first flight where the `rtk` field does not exist.

#### Challenge 23

Return the `flightId` of the first flight where the `litersFuel` field is greater than or equal to `1000`.

#### Challenge 24

Return the `flightId` of the first flight where the company is `DELTA AIRLINES` or `AMERICAN AIRLINES`, the origin airport abbreviation is `SBGR` and the destination airport abbreviation is `KJFK`.

#### Challenge 25

Return the `flightId` and `LitersFuel` of the first flight where the `LitersFuel` field **is not greater than** `1000` and the `LitersFuel` field exists.

#### Challenge 26

Return the first flight where `litersFuel` **is not greater than** `600` **and** the company **is not** `GOL` **or** `BLUE`, **e* * the field `litersFuel` exists.

#### Challenge 27

Remove all `BLUE` company flights where the amount of fuel is less than `400`. Enter the number of documents removed.

#### Challenge 28

Remove all `GOL` flights where the number of paid passengers is between `5` and `10`, including cases where the number is `5` and `10`. Enter the number of documents removed.

#### Challenge 29

Count how many flights of the company `GOL` whose `nature` field has a value equal to `Domestic` and insert in the `summaryFlights` collection a document with the fields: `company` (company name) and `totalVoosDomesticos` (the total returned previously ).

#### Challenge 30

Count how many flights of the company `AZUL` with `Domestic nature` exist and insert in the `summaryFlights` collection a document with the fields: `company` (company name) and `totalVoosDomesticos` (the total returned previously).
