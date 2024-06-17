import express from 'express';
import { AdminRoute, VendorRoute } from './routes';
import bodyParser from 'body-parser';


const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);

app.listen(5000, () => {
    console.clear()
    console.log('Listening on port 5000')
})