import './Body.css';

function Body() {
    return (
            <div className="pic-container">
                <article className="pic-container-inner">
                    <header className="pic-header">Pic Header</header>
                    <img src="" alt="APOD" width="450" height="auto" className="pic-image" />
                    <p className="pic-explanation">Pic Explanation</p>
                </article>
            </div>
    );
}

export default Body;