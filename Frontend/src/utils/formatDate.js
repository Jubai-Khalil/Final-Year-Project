export const formatDate = (date, config) => {
    const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const options = config || defaultOptions;

    const getCurrentDateFormatted = () => {
        const now = new Date();
        let day = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();
        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;
        return `${year}-${month}-${day}`; // ISO format 'YYYY-MM-DD' for the Date constructor
    };

    const convertDate = (dateString) => {
        const parts = dateString.split('-');
        return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    };

    // If no date is provided, use the current date
    const dateToFormat = date ? convertDate(date) : new Date(getCurrentDateFormatted());

    return dateToFormat.toLocaleDateString("en-UK", options);
};
