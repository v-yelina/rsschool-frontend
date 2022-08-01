interface IENV {
    API_ROOT?: string;
    GARAGE?: string;
}

const ENV: IENV = {
    API_ROOT: process.env.BASE_DIR,
    GARAGE: process.env.GARAGE,
};

export default ENV;
