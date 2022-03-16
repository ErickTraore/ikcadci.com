module.exports = {
    apps: [{
        script: 'index.js',
        watch: '.'
    }, {
        script: './service-worker/',
        watch: ['./service-worker']
    }],

    deploy: {
        production: {
            user: 'root',
            host: '217.160.29.241',
            ref: 'origin/master',
            repo: 'https://github.com/ErickTraore/ikcadci.com.git',
            path: 'DESTINATION_PATH',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': ''
        }
    }
};