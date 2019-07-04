export default (type: string, fn = (...args) => ({})) => {
    return (...args) => ({
        type,
        payload: fn(...args)
    });
};
