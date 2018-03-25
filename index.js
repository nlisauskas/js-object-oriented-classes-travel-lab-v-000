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
