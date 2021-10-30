import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";

function random() {
    return Math.floor(Math.random() * 255);
}

function App() {
    const colors = Array.from({ length: 4 }, () => {
        return `rgb(${random()}, ${random()}, ${random()})`;
    });

    return (
        <div>
            <h1 className="text-center mt-32 md:mt-48 lg:mt-60 text-3xl font-sans font-black text-gray-700">
                Color palette generator
            </h1>
            <div className="flex flex-row flex-wrap justify-center mt-16">
                {colors.map(color => {
                    return <Card key={color} color={color} />;
                })}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
