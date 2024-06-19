import express from 'express';
import { AdminRoute, VendorRoute } from './routes';
import bodyParser from 'body-parser';
import { connectDB } from './config/connect';
import config from './config';

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);

const port = config.PORT;

// Start Connection with DB  and Server
const start = async () => {
    try {
        await connectDB(config.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
      console.error("Error connection ", error)        
    }
}
 
start()