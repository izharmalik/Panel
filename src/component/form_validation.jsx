const form_validation =(formData) => {
let errors = {};
 if(!formData.email) {
    errors.email ="email is required.";
 }
if(!formData.password){
    errors.password ="password is required.";   
 }
 if(!formData.firstname){
    errors.firstname ="first name is required.";
 }
  if(!formData.lastname){
    errors.lastname ="last name is required.";
 }
 return errors;
}
export default form_validation;