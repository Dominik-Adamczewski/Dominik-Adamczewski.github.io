export function validateInputField(inputType, inputValue) {
  const regexPatterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    github: /^@[a-zA-Z0-9._-]{2,}$/,
  };

  if (!inputValue) {
    return ['This field cannot be empty!'];
  }

  const regexPattern = regexPatterns[inputType];
  if (regexPattern && !regexPattern.test(inputValue)) {
    const errorMessages = {
      email: 'Please enter a valid email address!',
      github: 'Please enter a valid GitHub username!',
    };
    return [errorMessages[inputType]];
  }

  return [];
}