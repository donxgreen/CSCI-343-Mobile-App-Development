class Destination {
  constructor(
    id,
    countryId,
    name,
    averageCost,
    yearFounded,
    averageRating,
    description,
    imageUrl
  ) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.averageCost = averageCost;
    this.yearFounded = yearFounded;
    this.averageRating = averageRating;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

export default Destination;
