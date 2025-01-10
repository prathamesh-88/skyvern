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
            path: "/home/app/skyvern",
            ssh_options: ["ForwardAgent=yes"],
            "post-deploy": "cd /home/app/skyvern/current && cp ~/.private/.env_skyvern ~/skyvern/current/.env && pm2 reload ecosystem.config.js",
            "post-setup": "python3.11 -m pip install --user pipx && python3.11 -m pipx ensurepath && pipx install poetry==1.7.1"
        }
    }
}