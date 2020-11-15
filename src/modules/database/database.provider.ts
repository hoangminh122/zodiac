

export const databaseProvider = {
    provide:'SequelizeInstance',
    useFactory:async () => {
        let config;
        switch(process.env.NODE_ENV){
            case 'prod':
            case 'production':
                config = databseConfig.production;
        }
        
    }
}