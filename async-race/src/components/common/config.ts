interface IENV {
    API_ROOT?: string;
    GARAGE?: string;
    WINNERS?: string;
    ENGINE?: string;
}

const ENV: IENV = {
    API_ROOT: process.env.API_ROOT,
    GARAGE: process.env.GARAGE,
    WINNERS: process.env.WINNERS,
    ENGINE: process.env.ENGINE,
};

export default ENV;
