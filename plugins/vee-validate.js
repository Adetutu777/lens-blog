
import { extend, Validator } from 'vee-validate';
import { required, email, alpha, numeric, double, oneOf, alpha_spaces, min_value, alpha_dash, confirmed, min, regex, max_value, image  } from 'vee-validate/dist/rules';

// Add the required rule
const isComplexPassword =(value)=> {
 const tester =/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
 const isMatch = !tester.test(String(value))
  return !isMatch
}

extend('complex_password', (value, args) => isComplexPassword(value)
    
);


extend('required', {
  ...required,
  message: 'This field is required',
  
});
extend('alpha', {
  ...alpha,
  message: 'The  field may only contain alphabetic characters',
  
});
extend('numeric', {
  ...numeric,
  message: 'The  field may only contain numbers',
  
});
extend('double', {
  ...double,
  message: 'The  field may only contain number',
  
});
extend('oneOf', {
  ...oneOf,
  message: 'Please select one of the dropdown',
  
});
extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'The  field may only contain alphabetic characters',
  
});
extend('min_value', {
  ...min_value,
  message: 'The value must be greater than zero(0)',
  
});
extend('image', {
  ...image,
  message: 'Please uplaod an image',
  
});
extend('alpha_dash', {
  ...alpha_dash,
  message: '',
  
});
extend('regex', { 
    ...regex,
    regex: /\.(js|ts)$/,
  message:'test',
 },
);

// Add the email rule
extend('email', {
  ...email,
  message: 'This field must be a valid email'
});
extend('confirmed', {
  ...confirmed,
  message: 'The field confirmation does not match'
});
extend('min', {
  ...min,
  message: 'More than 8 characters'
});
extend('max_value', {
  ...max_value,
  message: 'The field cannot exceed 100'
});

extend('requiredSome', (value, values) => {
  // Some values are truthy/present
  // if (values.some((val)=>{
  //   return !val !== undefined
  // })) {
  //   return { required: true, valid: value !== '' };
  // }

  return { required: true, valid: false };
});