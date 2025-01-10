module.exports = {
    apps: [
        {
            name: "skyvern-frontend",
            scripts: "./run_ui.sh"
        },
        {
            name: "skyvern-server",
            scripts: "./run_skyvern.sh"
        }
    ],
    deploy: {
        production: {
            user: "app",
            host: "172.31.89.127",
            ref: "origin/main",
            repo: "git@github.com:prathamesh-88/skyvern.git",
            path: "/home/app/skyvern_pro",
            ssh_options: ["ForwardAgent=yes"],
            "post-deploy": "cd /home/app/skyvern_pro && cp ~/.private/.env ~/skyvern_pro/current && pm2 reload ecosystem.config.js",
            "post-setup": "python3 -m pip install --user pipx && python3 -m pipx ensurepath && pipx install poetry==1.7.1"
        }
    }
}