const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
  let errors = {};


  data.text = validText(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 4, max: 250 })) {
    errors.text = 'Drawing Comment must be between 4 and 250 characters';
    //So that users can comment "nice"
  }

  //Validator for image when constructed
  // if (Validator.isEmpty(data.image)) {
  //   errors.text = 'image field is required';
  // }

  // an "OR" validator

  // if (Validator.isEmpty(data.text) || Validator.isEmpty(data.image) ) {
  //   errors.text = 'Text field is required';
  // }
  
  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};