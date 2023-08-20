import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from './components/Home.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row, Container } from 'react-bootstrap';
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";


function App() {

    return (
        <>
            <Container className="mainContent my-5  contentContianer p-5">
                <Row>
                    <Sidebar />
                    <MainContent />
                </Row>
            </Container>

        </>

    );
}

export default App;
