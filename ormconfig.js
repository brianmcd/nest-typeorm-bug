module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  entities: ['src/**/*.entity.ts'],
  username: 'postgres',
  database: 'typeorm_test',
  logging: true,
  synchronize: true,
};
