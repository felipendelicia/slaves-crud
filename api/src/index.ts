import app from "./app"
import database from "./database"
import colors from "colors/safe"
import config from "./config"

const startAppCallback = () => {
    console.log(colors.green(`server on port ${config.PORT}`))
}

// Connect with the DB
database()

// Start APP
app.listen(config.PORT, startAppCallback)
