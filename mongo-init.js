db.createUser(
        {
            user: "user",
            pwd: "passwd",
            roles: [
                {
                    role: "readWrite",
                    db: "database"
                }
            ]
        }
);
