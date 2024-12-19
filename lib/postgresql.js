const { Client } = require('pg');

module.exports = class PostgreSQL {
  constructor(url, options = {}) {
    this.url = url;
    this.client = new Client({ connectionString: this.url, ...options });
    this._connected = false;
  }

  async connect() {
    if (!this._connected) {
      await this.client.connect();
      this._connected = true;
    }
  }

  async read() {
    try {
      await this.connect();
      const res = await this.client.query('SELECT data FROM settings LIMIT 1');
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
      await this.connect();
      const query = `
        INSERT INTO settings (id, data) VALUES (1, $1)
        ON CONFLICT (id) DO UPDATE SET data = $1
        RETURNING *;
      `;
      const values = [data];
      const res = await this.client.query(query, values);
      return res.rows[0];
    } catch (error) {
      console.error("Error writing data:", error);
      throw error;
    }
  }
};