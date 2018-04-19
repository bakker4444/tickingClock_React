const appContainer = document.getElementById("app")

const render = () => {

    ReactDOM.render(
        React.createElement(
            "h1",
            null,
            "The time is: " + new Date().toLocaleTimeString()
        ),
        appContainer
    );
    
}

setInterval(render, 1000);