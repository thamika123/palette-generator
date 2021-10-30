function Card(props) {
    return (
        <div className="w-72 h-96 m-8 shadow-lg rounded-2xl bg-white">
            <div
                className="w-full h-80 rounded-t-2xl"
                style={{ background: props.color }}
            ></div>
            <div className="w-full h-16 flex items-center justify-center">
                <h2 className="text-gray-700 font-sans text-lg">
                    {props.color}
                </h2>
            </div>
        </div>
    );
}

export default Card;
