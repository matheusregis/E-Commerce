module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'ecommerce',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
