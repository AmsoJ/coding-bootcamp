import ParentChild from "./assets/components/ParentChild/ParentChild";

function App() {
    return <div className="parent-wrap p-0 container-fluid h-100 d-flex align-items-center justify-content-center">
        
        <ParentChild />

        <div className="curve position-fixed">
            <svg className="img-fluid" xmlns="http://www.w3.org/2000/svg" width="610" height="154"><path fill="#F4F4FC" fill-rule="evenodd" d="M610 154C469.493 123.42 358.432 86.087 276.818 42S102.93-11.42 0 14v140h610z"/></svg>
        </div>
    </div>
}

export default App;