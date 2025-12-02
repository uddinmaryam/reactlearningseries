function Welcome() {
    return (
        <div className ="card">
            <h1>Welcome to my application</h1>
            <p>this is my first component</p>

        </div>
    );
}

function App(){
    return (
        <section>
        <Welcome />
        <Welcome />
        </section>
    );
}
export default App;