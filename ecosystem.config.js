module.exports = {
    apps: [
        {
            name: "skyvern-frontend",
            script: "./run_ui.sh"
        },
        {
            name: "skyvern-server",
            script: "./run_skyvern_prod.sh"
        }
    ],
    deploy: {
        production: {
            user: "ubuntu",
            host: "172.31.45.185",
            ref: "origin/main",
            repo: "git@github.com:prathamesh-88/skyvern.git",
            path: "/home/app/skyvern",
            ssh_options: ["ForwardAgent=yes"],
            "post-deploy": "cd /home/app/skyvern/current && cp ~/.private/.env.skyvern ~/skyvern/current/.env && pm2 reload ecosystem.config.js",
            "post-setup": "python3 -m pip install --user pipx && python3 -m pipx ensurepath && python3 -m pipx install --python python3 poetry==1.7.1"
        }
    }
}