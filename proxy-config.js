const PROXY_CONFIG = [
    {
        context: [
            "/identity",
            "/users",
            "/user"
        ],
        target: "http://localhost:18082/api",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
