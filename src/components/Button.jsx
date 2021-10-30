function Button(props) {
    return (
        <button
            class="bg-purple-500 rounded-lg sm:w-72 md:w-80 h-16 text-white text-lg font-sans mt-16"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;
