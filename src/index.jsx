import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";

function random(max) {
    return Math.floor(Math.random() * max);
}

function App() {
    const colors = Array.from({ length: 4 }, () => {
        return `hsl(${random(360)}, 80%, 70%)`;
    });

    return (
        <div>
            <h1 className="text-center mt-32 md:mt-48 text-3xl font-sans font-black text-gray-700">
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
