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


let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let verticalDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    let horizontalDistance = Math.abs(avenueToInteger(this.endingLocation.horizontal) - avenueToInteger(this.beginningLocation.horizontal));
    return verticalDistance + horizontalDistance;
  }
}
