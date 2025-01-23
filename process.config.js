module.exports = {
    apps : [{
      name   : "BURAK",
      cwd: "./",
      script : "./dist/server.js",  // boshlang'ish kamandasi
      watch: false,
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      }, 
      instances: 1,  // yadrodan foydalanish soni
      exec_mode: "cluster",
    }]
  }