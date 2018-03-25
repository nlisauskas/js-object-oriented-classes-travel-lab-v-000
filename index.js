class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    return Math.abs(this.startDate.getFullYear() - year);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

  blocksTravelled() {
    vertical = Math.abs(endingLocation.vertical - beginningLocation.vertical);
    horizontal = beginningLocation
  }
}
