module.exports = {
    apps: [
        {
            name: "skyvern-frontend",
            script: "./run_ui.sh"
        },
        {
            name: "skyvern-server",
            script: "./run_skyvern.sh"
        }
    ],
    deploy: {
        production: {
            user: "app",
            host: "172.31.89.127",
            ref: "origin/development",
            repo: "git@github.com:prathamesh-88/skyvern.git",
            path: "/home/app/skyvern_pro",
            ssh_options: ["ForwardAgent=yes"],
            "post-deploy": "cd /home/app/skyvern_pro/current && cp ~/.private/.env_skyvern ~/skyvern_pro/current/.env && pm2 reload ecosystem.config.js",
            "post-setup": "python3 -m pip install --user pipx && python3 -m pipx ensurepath && pipx install poetry==1.7.1"
        }
    }
}