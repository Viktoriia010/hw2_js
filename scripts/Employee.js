class Employee {
  #firstName;
  #lastName;
  #position;
  #salary;

  constructor(firstName, lastName, position, salary) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#position = position;
    this.#salary = salary;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get position() {
    return this.#position;
  }

  get salary() {
    return this.#salary;
  }
}
export default Employee;
