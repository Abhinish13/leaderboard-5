function Player () {
}

Player.prototype.setFirstName = function setFirstName (firstName) {
  this.firstName = firstName;
};

Player.prototype.setLastName = function setLastName (lastName) {
  this.lastName = lastName;
};

Player.prototype.setWorkEmail = function setWorkEmail (workEmail) {
  this.workEmail = workEmail;
};

Player.prototype.setJobTitle = function setJobTitle (jobTitle) {
  this.jobTitle = jobTitle;
};

Player.prototype.setCompany = function setCompany (company) {
  this.company = company;
};

Player.prototype.setTime = function setTime (time) {
  this.time = time;
};

module.exports = Player;