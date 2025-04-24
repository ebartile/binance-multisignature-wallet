import {isNaN, isNil, isUndefined} from "lodash-es";
import 'dotenv/config'; // This auto-loads the .env file

function readEnv(name) {
    if (!isUndefined(process.env[name])) {
        return process.env[name];
    }
}

const getEnvConfig = () => ({
    bind: readEnv("BINANCE_BIND"),
    port: Number(readEnv("BINANCE_PORT")),
    storagePath: readEnv("BINANCE_STORAGE_PATH"),
    mongodbUrl: readEnv("BINANCE_MONGODB_URL"),
    mongodbName: readEnv("BINANCE_MONGODB_NAME"),
    keyPath: readEnv("BINANCE_KEYPATH"),
    crtPath: readEnv("BINANCE_CRTPATH"),
    logFile: readEnv("BINANCE_LOGFILE"),
    wsProvider: readEnv("BINANCE_WS")
});

const defaultConfig = {
    port: 7000,
    bind: "localhost",
    storagePath: "./storage",
};

function mergeConfigs(...configs) {
    function isNilOrNaN(value) {
        return isNil(value) || isNaN(value);
    }

    function get(key) {
        return configs.reduce((entry, config) => {
            return !isNilOrNaN(config[key]) ? config[key] : entry;
        }, defaultConfig[key]);
    }

    return {
        port: get("port"),
        bind: get("bind"),
        storagePath: get("storagePath"),
        mongodbUrl: get("mongodbUrl"),
        mongodbName: get("mongodbName"),
        keyPath: get("keyPath"),
        crtPath: get("crtPath"),
        logFile: get("logFile"),
        wsProvider: get("wsProvider")
    };
}

const getConfig = () => {
    const env = getEnvConfig();
    return mergeConfigs(env);
};

export {getConfig};
