const { Pool } = require('pg');

let pool;

module.exports = class PostgreSQL {
  constructor(url, options = {}) {
    if (!pool) {
      pool = new Pool({
        connectionString: url,
        ssl: { rejectUnauthorized: false },
        ...options,
      });
    }
    this.pool = pool;
  }

  async createTable() {
    try {
      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS settings (
            id SERIAL PRIMARY KEY,
            data JSONB
        );
      `);
      console.log("Table 'settings' created or already exists.");
    } catch (error) {
      console.error("Error creating table:", error);
      throw error;
    }
  }

  async read() {
    try {
      const res = await this.pool.query('SELECT data FROM settings LIMIT 1');
      this.data = res.rows[0] ? res.rows[0].data : {};
      if (!res.rows[0]) {
        await this.write(this.data);
      }
      return this.data;
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  }

  async write(data) {
    try {
      if (!data) return data;
      const query = `
        INSERT INTO settings (id, data) VALUES (1, $1)
        ON CONFLICT (id) DO UPDATE SET data = $1
        RETURNING *;
      `;
      const values = [data];
      const res = await this.pool.query(query, values);
      return res.rows[0];
    } catch (error) {
      console.error("Error writing data:", error);
      throw error;
    }
  }
};
