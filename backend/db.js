const pool = new Pool({
    user: "your_username",
    host: "localhost",
    database: "your_database",
    password: "your_password",
    port: 5432,
  });
  


(async function initializeDatabase() {
    const query = `
      CREATE TABLE IF NOT EXISTS employees (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        age INT NOT NULL,
        citizenship_status VARCHAR(50) NOT NULL,
        gross_salary NUMERIC NOT NULL
      );
    `;
    try {
      await pool.query(query);
      console.log("Database initialized successfully.");
    } catch (err) {
      console.error("Error initializing database:", err);
    }
  })();