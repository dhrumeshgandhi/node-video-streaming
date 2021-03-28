module.exports = {
  apps : [{
    name: "video-streaming",
    script: 'index.js',
    watch: true,
    increment_var : 'NODE_PORT',
    env: {
      NODE_ENV: "dev",
      NODE_PORT: 3000
    },
    env_prod: {
      NODE_ENV: "prod",
      NODE_PORT: 3000
    },
    instances: 2,
    exec_mode: "cluster"
  }]
};
