import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";

function App() {
    return (
        <div>
            <h1 className="text-center mt-32 md:mt-48 lg:mt-60 text-3xl font-sans font-black text-gray-700">
                Color palette generator
            </h1>
            <div className="flex flex-row flex-wrap justify-center mt-16">
                <Card color="#60A5FA" />
                <Card color="#34D399" />
                <Card color="#FBBF24" />
                <Card color="#F87171" />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
