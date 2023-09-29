const userSchema = require("../model/userModel");
const { ageCalculation } = require("../utils/ageCalculation");
const { nameRegex, emailValidation } = require("../utils/regex");

const userRegistration = async (req, res) => {
  try {
    const { firstName, lastName, email, country, state, city, gender, dob } =
      req.body;
    if (
      firstName &&
      lastName &&
      email &&
      country &&
      state &&
      city &&
      gender &&
      dob
    ) {
      if (
        nameRegex.test(firstName) === false ||
        nameRegex.test(lastName) === false
      ) {
        res.status(403).send({
          baseResponse: {
            status: 0,
            msg: "Please enter alphabet only for Fisrt Name and Last Name",
          },
        });
      }
      if (emailValidation.test(email) === false) {
        res.status(403).send({
          baseResponse: {
            status: 0,
            msg: "Please enter valid email",
          },
        });
      }
      let age = ageCalculation(new Date(dob));
      if (age < 14) {
        res.status(403).send({
          baseResponse: {
            status: 0,
            msg: "User must be above age 14",
          },
        });
      }
      const doc = userSchema({
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        state: state,
        city: city,
        gender: gender,
        dob: dob,
      });
      await doc.save();
      res.status(200).send({
        baseResponse: { status: 1, msg: "User Registerd Successfully" },
      });
    } else {
      res.status(400).send({
        baseResponse: { status: 0, msg: "All feilds are required" },
      });
    }
  } catch (error) {}
};

module.exports = { userRegistration };
