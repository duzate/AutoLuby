import 'reflect-metadata';
import { app } from './app';
import { AppDataSource } from './database'

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

app.listen(3333, () => {
  console.log("Server is running http://localhost:3333");
})
