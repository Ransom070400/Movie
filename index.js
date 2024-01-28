class Movie {
    constructor(title, dailyRentalRate) {
      this.title = title;
      this.dailyRentalRate = dailyRentalRate;
    }
  }
  
  class Customer {
    constructor(name) {
      this.name = name;
      this.rentals = [];
    }
  
    addRental(rental) {
      this.rentals.push(rental);
    }
  
    getName() {
      return this.name;
    }
  
    getRentals() {
      return this.rentals;
    }
  
    getTotalCharge() {
      let totalCharge = 0;
  
      for (let i = 0; i < this.rentals.length; i++) {
        totalCharge += this.rentals[i].getCharge();
      }
  
      return totalCharge;
    }
  
    getFrequentRenterPoints() {
      let frequentRenterPoints = 0;
  
      for (let i = 0; i < this.rentals.length; i++) {
        frequentRenterPoints += this.rentals[i].getFrequentRenterPoints();
      }
  
      if (this.rentals.length > 2) {
        frequentRenterPoints += 1;
      }
  
      return frequentRenterPoints;
    }
  }
  
  class Rental {
    constructor(movie, daysRented) {
      this.movie = movie;
      this.daysRented = daysRented;
    }
  
    getCharge() {
      let charge = 0;
  
      switch (this.movie.dailyRentalRate) {
        case 0.99:
          charge = 2;
          if (this.daysRented > 2) {
            charge += (this.daysRented - 2) * 1.5;
          }
          break;
        case 2.99:
          charge = 3;
          if (this.daysRented > 1) {
            charge += (this.daysRented - 1) * 2;
          }
          break;
        case 4.99:
          charge = 5;
          if (this.daysRented > 3) {
            charge += (this.daysRented - 3) * 3;
          }
          break;
      }
  
      return charge;
    }
  
    getFrequentRenterPoints() {
      if (this.daysRented > 1) {
        return 2;
      }
  
      return 1;
    }
  }
  
  // Example usage:
  const customer = new Customer("John Doe");
  customer.addRental(new Rental(new Movie("Movie 1", 0.99), 3));
  customer.addRental(new Rental(new Movie("Movie 2", 2.99), 2));
  customer.addRental(new Rental(new Movie("Movie 3", 4.99), 1));
  
  console.log(`Total charge: ${customer.getTotalCharge()}`);
  console.log(`Frequent renter points: ${customer.getFrequentRenterPoints()}`);
