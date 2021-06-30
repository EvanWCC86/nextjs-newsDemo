

const Header = () => {
    return (
        <header>
            <div>
                <h1>EvanWeb-News</h1>
                <form>
                    <input type="text" placeholder="serarch" />
                    <span>search icon</span>
                </form>
                <span>toggleicon</span>
                <ul>
                    <li><a>World</a></li>
                    <li><a>US</a></li>
                    <li><a>Canada</a></li>
                    <li><a>Business</a></li>
                    <li><a>Technology</a></li>
                    <li><a>Entertainment</a></li>
                    <li><a>Sports</a></li>
                    <li><a>Science</a></li>
                    <li><a>health</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
