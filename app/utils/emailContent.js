export const emailContent = (resetUrl) => {
  return `<html>
    <head>
      <style>
        body {
           font-family: "trebuchet-ms", sans-serif !important;
           font-optical-sizing: auto;
           font-style: normal;
           font-weight: 400;
          background-color: #f4f4f9;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
        }
        p {
          font-size: 16px;
          color: #555;
        }
        .my-btn {
  background-color: #35c4dc;
  color: #fff !important;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  transition: background-color 0.3s;
  text-decoration: none;
    font-size: 16px;
}
.my-btn:hover {
  background-color: #06b6d4;
  outline: #06b6d4;
  box-shadow: none;
}
.my-btn:active,
.my-btn:focus {
  background-color: #059bb4;
  outline: #059bb4;
  box-shadow: none;
}
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hey there!</h1>
        <p>Forgot your password? No worries—we’ve got you covered! Just click the link below to reset it:</p>
        <a href=${resetUrl} class="my-btn text-center">Click here to reset</a>
        <p>Take care,<br>The Flat Finder Team</p>
      </div>
    </body>
  </html>`;
};
