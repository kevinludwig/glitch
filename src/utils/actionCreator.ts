export default (type: string, fn = () => ({})) => {
    return (...args) => ({
        type,
        payload: fn(...args)
    });
};
