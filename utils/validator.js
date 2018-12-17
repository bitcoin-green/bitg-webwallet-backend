exports.isValidEmail = function (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  const ValidateEmail = (mail) => {
    if (re.test(mail)) {
      return true;
    }
    return (false);
  };
  if (!email) {
    return ({
      valid: false,
      reason: 'Email field is empty. Please input email.'
    });
  } else if (email === '') {
    return ({
      valid: false,
      reason: 'Email is empty'
    });
  } else if (!ValidateEmail(email)) {
    return ({
      valid: false,
      reason: 'Invalid email format'
    });
  }
  return ({
    valid: true
  });
};

exports.isValidPassword = function (password) {
  if (!password) {
    return ({
      valid: false,
      reason: 'password field is empty. Please input password.'
    });
  } else if (password === '') {
    return ({
      valid: false,
      reason: 'password is empty.'
    });
  } else if (password.length < 5) {
    return ({
      valid: false,
      reason: 'Password must be at least 5 characters'
    });
  }
  return ({
    valid: true
  });
};
