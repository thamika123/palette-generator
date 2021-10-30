function Card(props) {
    return (
        <div className="w-72 h-96 m-8 shadow-lg rounded-lg bg-white">
            <div
                className="w-full h-80 rounded-t-lg"
                style={{ background: props.color }}
            ></div>
            <div className="w-full h-16 flex items-center justify-center">
                <h2 className="text-gray-700 font-sans font-lg">
                    {props.color}
                </h2>
            </div>
        </div>
    );
}

export default Card;
