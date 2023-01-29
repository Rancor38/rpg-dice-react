const QUANTITY_FORM = ({ quantity, setQuantity, setResults, dieToRoll }) => {
    const handleChange = (e) => {
        e.preventDefault();
        setQuantity(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.value = 1;
        setQuantity(e.target.value);
        setResults(null);
        e.target[0].value = e.target.value;
        dieToRoll(6);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                min="1"
                max="100"
                onChange={handleChange}
                value={quantity}
            ></input>
            <button type="submit" value="Reset">
                Reset
            </button>
        </form>
    );
};

export default QUANTITY_FORM;
