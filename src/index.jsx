import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";
import Button from "./components/Button";
import HSLToHex from "./components/color-conversion";

function random(max) {
    return Math.floor(Math.random() * max);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { colors: this.generateColors() };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ colors: this.generateColors() });
    }

    generateColors() {
        return Array.from({ length: 4 }, () => {
            return HSLToHex(random(360), 80, 70);
        });
    }

    render() {
        return (
            <div className="text-center">
                <h1 className="mt-32 md:mt-44 text-4xl font-sans font-black text-gray-700">
                    Color palette generator
                </h1>
                <div className="flex flex-row flex-wrap justify-center mt-16">
                    {this.state.colors.map(color => {
                        return <Card key={color} color={color} />;
                    })}
                </div>
                <Button text="Generate palette" onClick={this.handleClick} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
