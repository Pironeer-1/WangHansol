function MyButton(props){
    cosnt [isClicked, setIsClicked] = React.useState(false)

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked' : 'Click hear!'
    )
}

const domContainer = document.createElement('#root');
reactDom.render(React.createElement(MyButton),domContainer)