class User {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso");
    } else {
      console.log("Falha ao fazer login! Email ou senha incorretos.");
    }
  }
}

const plataformUser = new User(
  "Gilberto Rodrigues",
  "gilberto@gmail.com",
  "gilberto123"
);

plataformUser.login("gilberto@gmail.com", "gilberto123");
