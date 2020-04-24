const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  mongodbUri: 'mongodb://localhost:27017/QuotesBookdb',
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
};
