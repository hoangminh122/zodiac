
export interface IDatabaseConfigAttributes {
    username:string;
    password:string;
    database:string;
    host:string;
    port:number;
    dialect:string;
    logging:boolean |Function;
    force:boolean;
    dialectOption: {
        ssl:{
            required:boolean,
            rejectUnauthorired:boolean
        }
    }
}

export interface IDatabaseConfig {
    development:IDatabaseConfigAttributes,
    production:IDatabaseConfigAttributes,
    test:IDatabaseConfigAttributes
}