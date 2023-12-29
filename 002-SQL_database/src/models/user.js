const db = require("../configs/database");

class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  save() {
    return db.execute("INSERT INTO users (username, email) VALUES (?, ?)", [
      this.username,
      this.email,
    ]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM users");
  }

  static findById(id) {
    return db.execute("SELECT * FROM users WHERE users.id = ?", [id]);
  }

  static updateById(id, username, email) {
    return db.execute(
      "UPDATE users SET users.username = ?, users.email = ? WHERE users.id = ?",
      [username, email, id]
    );
  }

  static deleteById(id) {
    return db.execute("DELETE FROM users WHERE users.id = ?", [id]);
  }
}

module.exports = User;
