module.exports = {
  apps: [{
    name: 'yinatra-pm2-deploy',
    script: '/opt/apps/yinatra-pm2-deploy/venv/bin/gunicorn',
    args: '--workers 2 --bind 0.0.0.0:3001 app:app',
    cwd: '/opt/apps/yinatra-pm2-deploy',
    interpreter: 'none',
    env: {
      FLASK_ENV: 'production',
      PORT: '3001'
    }
  }]
}
