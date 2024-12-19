const { Pool } = require('pg');

class PostgreSQL {
  constructor(connectionString) {
    this.pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }

  async query(query, params) {
    return this.pool.query(query, params);
  }
}

module.exports = PostgreSQL;
