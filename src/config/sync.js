const sequelize = require('./database.js')
require('../models/index')

class databasesync{
    static async sync(){
        try{
            await sequelize.authenticate()
            .then( () => {
                console.log('database connection established successfully')
                })
                .catch((error) => {
                    console.error('Unable to connect to the database:', error)
               })

            await sequelize.sync({alter: false})
            console.log('database synchronized successfully')

        }catch (error) {
            console.log('Error synchronized the database:', error)
      }  
    }
} 

