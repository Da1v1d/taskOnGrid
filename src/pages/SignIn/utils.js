const signIn = async (data) => {
  return fetch('http://localhost:5000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.get('email'),
      password: data.get('password'),
    }),
  });
};

export const handleSubmit = async (event, navigate) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  try {
    await signIn(data).then((res) => {
      if (res.status === 200) {
        alert('successfully signed in');
        localStorage.setItem('isAuth', 'true');
        navigate('/dashboard');
      }
      res.status === 400 && alert('user does not exist');
    });
  } catch (error) {
    console.error(error);
  }
};
