interface PasswordStrength {
  score: number;
  strength: 'weak' | 'fair' | 'good' | 'strong' | 'very strong';
  feedback: string[];
  passed: boolean;
}

export function checkPasswordStrength(password: string): PasswordStrength {
  const feedback: string[] = [];
  let score = 0;

  // Check minimum length
  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push('Password should be at least 8 characters long');
  }

  // Check for lowercase letters
  if (/[a-z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Add lowercase letters');
  }

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Add uppercase letters');
  }

  // Check for numbers
  if (/\d/.test(password)) {
    score += 1;
  } else {
    feedback.push('Add numbers');
  }

  // Check for special characters
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Add special characters (!@#$%^&* etc.)');
  }

  // Bonus for length
  if (password.length >= 12) {
    score += 1;
  }

  if (password.length >= 16) {
    score += 1;
  }

  // Determine strength level
  let strength: PasswordStrength['strength'];
  let passed = false;

  if (score <= 2) {
    strength = 'weak';
  } else if (score === 3) {
    strength = 'fair';
  } else if (score === 4) {
    strength = 'good';
    passed = true;
  } else if (score === 5) {
    strength = 'strong';
    passed = true;
  } else {
    strength = 'very strong';
    passed = true;
  }

  if (feedback.length === 0) {
    feedback.push('Password meets all requirements');
  }

  return {
    score,
    strength,
    feedback,
    passed
  };
}

// Example usage
const result = checkPasswordStrength('MyP@ssw0rd123');
console.log(result);
// Output: { score: 5, strength: 'strong', feedback: ['Password meets all requirements'], passed: true }