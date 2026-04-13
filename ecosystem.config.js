module.exports = {
  apps: [{
    name: 'yinatra-pythondemo',
    script: 'gunicorn',
    args: '--workers 2 --bind 0.0.0.0:3000 app:app',
    cwd: '/opt/apps/yinatra-pythondemo',
    interpreter: 'python3',
    env: {
      FLASK_ENV: 'production',
      PORT: 3000
    }
  }]
}
