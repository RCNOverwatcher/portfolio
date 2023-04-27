import data from './config.json' assert { type: "json" };

export const getConfig = () => {
    return data;
};

export default (req, res) => {
    const templateConfig = getConfig();
    res.json(templateConfig);
};
