export const index = async ({ params: { token }, update, html }: { params: { token: string }, update: any, html: any }) => {
  const {id} = await update.verify(token);
  if (!id) {
    return html(`
    <html lang='en'>
      <head>
          <title>Unauthorized</title>
      </head>
      <body>
          <h1>Unauthorized</h1>
      </body>
    </html>
    `
    )}
  return html(`
<html lang='en'>
  <head>
      <title>Reset password</title>
  </head>
  <body style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100dvh; background-color: #f0f0f0;">
      <p>Reset your password</p>
      <form>
          <label for="password">Password</label>
          <input type="password" id="password" name="password">
          <button type="submit" id="submit">Submit</button>
      </form>
      <script>
          const form = document.querySelector('form');
          form.addEventListener('submit', async (event) => {
              event.preventDefault();
              const password = document.querySelector('#password').value;
              const response = await fetch('/api/v1/user/update-password/${token}', {
                  method: 'PATCH',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ password }),
              });
              const data = await response.json();
              console.log(data);
          });
      </script>
  </body>
</html>
`
)}