class Quarter {
  constructor(date = Date.now()) {
    this.date = new Date(date)
  }

  get year() {
    return this.date.getFullYear()
  }

  get timestops() {
    return [
      new Date(`1.1.${this.year}`),
      new Date(`4.1.${this.year}`),
      new Date(`7.1.${this.year}`),
      new Date(`10.1.${this.year}`)
    ]
  }


  get workdays() {

  }

  get fridays() {
  }

  get startDate() {
    return new Date(Date.now())
  }

  get endDate() {
    return new Date(Date.now())
  }
}


module.exports = {
  Quarter
}