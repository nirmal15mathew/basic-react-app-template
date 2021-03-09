import "./AppHeader.css"

function AppHeader(props){
    const { appTitle, appMenu } = props

    let menuItems = appMenu.map((item, i) => (
        <li className="app-menu-list-item" key={i}>
            { item }
        </li>
    ))
    return (
        <header className="app-header">
            <h1 className="app-title">{appTitle}</h1>
            <menu className="app-menu">
                <ul className="app-menu-list">
                    { menuItems }
                </ul>
            </menu>
        </header>
    )
}

export default AppHeader;