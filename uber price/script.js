class UberCost {
    constructor(customerName, city, distance, fare) {
      this.customerName = customerName;
      this.city = city;
      this.distance = distance;
      this.fare = fare;
    }
    getCabFare() {
      return (
        this.customerName +
        "'s Final Cab Fare for" +
        " " +
        this.city +
        " " +
        "is" +
        " " +
        this.fare
      );
    }
  }
  
  let customer1 = new UberCost("Thaneshwar", "T.nagar", "5 KMs", "INR 500");
  let customer2 = new UberCost("rahul", "velachery", " 10 KMs", "INR 1000");
  
  console.log(customer1.customerName);
  console.log(customer1.distance);
  console.log(customer1.getCabFare());