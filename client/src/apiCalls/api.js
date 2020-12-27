export const LoginUser = async (payload) => {
    const response = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const responseBody = await response.json();
    return responseBody;
  };

  export const RegisterUser = async (payload) => {
    const response = await fetch("http://localhost:8080/api/v1/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const responseBody = await response.json();
    return responseBody;
  };