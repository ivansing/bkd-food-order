import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    PORT: number;
    MONGO_URI: string;
}

// Validate and export enviroment variables
const getConfig = (): EnvConfig => {
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : undefined;
    const mongoUri = process.env.MONGO_URI;

    if(!port || !mongoUri) {
        throw new Error('Missing required enviroment variables.')
    }

    return{
        PORT: port,
        MONGO_URI: mongoUri,
    }
}

const config = getConfig();

export default config;