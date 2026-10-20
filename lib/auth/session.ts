export function setSessionCookie(user: { fullName?: string; email: string }) {
  if (typeof document === 'undefined') {
    return;
  }

  const payload = JSON.stringify({
    fullName: user.fullName || 'ChamaCore Member',
    email: user.email
  });

  document.cookie = `chamacore-session=${encodeURIComponent(payload)}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
  localStorage.setItem('chamacore-user', payload);
}

export function clearSessionCookie() {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = 'chamacore-session=; path=/; max-age=0; SameSite=Lax';
  localStorage.removeItem('chamacore-user');
}

export function getStoredUser() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = localStorage.getItem('chamacore-user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
