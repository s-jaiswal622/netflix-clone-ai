export const validateData = (email, password) => {
   if(!email || !password) {
    return "Email and Password are required";
  }
 let isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
 let isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);


 if(!isValidEmail) return "Email ID is not valid";
 if(!isValidPassword) return "Password must be at least 8 characters long and contain at least one letter and one number";

  return null;
}