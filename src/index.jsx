import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";
import Button from "./components/Button";
import Notification from "./components/Notification";
import HSLToHex from "./components/color-conversion";

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: this.generateColors(),
            notificationVisible: false,
        };

        this.handleGeneration = this.handleGeneration.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    generateColors() {
        return [1, 2, 3, 4].map(x => {
            return { id: x, color: HSLToHex(random(0, 360), 85, 70) };
        });
    }

    handleGeneration(e) {
        if (e.type === "click") {
            this.setState({ colors: this.generateColors() });
        } else if (e.code === "space") {
            this.setState({ colors: this.generateColors() });
        }
    }

    handleCardClick(color) {
        navigator.clipboard.writeText(color);
        this.setState({ notificationVisible: true });

        setTimeout(() => this.setState({ notificationVisible: false }), 2000);
    }

    render() {
        return (
            <div className="text-center" onKeyDown={this.handleGeneration}>
                {this.state.notificationVisible && <Notification />}

                <h1 className="mt-40 text-4xl font-sans font-black text-gray-700">
                    Color palette generator
                </h1>
                <div className="flex flex-row flex-wrap justify-center mt-16">
                    {this.state.colors.map(item => {
                        return (
                            <Card
                                key={item.id}
                                color={item.color}
                                onClick={this.handleCardClick}
                            />
                        );
                    })}
                </div>
                <Button
                    text="Generate palette"
                    onClick={this.handleGeneration}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
