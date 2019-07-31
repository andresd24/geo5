module.exports = {
  apps : [
      {
        name: "geo3",
        script: "webpack-dev-server --inline --content-base . --history-api-fallback --port 80",
        watch: true,
        env: {
            "PORT": 8080,//you can choose
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 80,//you can choose
            "NODE_ENV": "production",
        }
      }
  ]
}