import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BreedDetails from './components/BreedDetails/BreedDetails';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import MostSearched from './components/MostSearched/MostSearched';

interface Props {
    name: string;
}

export default function App() {
    return (
        <div className="container mx-auto w-full h-full">
            <Link to="/">
                <div className="bg-logo bg-no-repeat bg-contain bg-center w-20 h-8 mt-6 mb-10"></div>
            </Link>
            <Switch>
                <Route path="/breed/:id" exact>
                    <BreedDetails></BreedDetails>
                </Route>

                <Route path="/breeds/popular" exact>
                    <MostSearched></MostSearched>
                </Route>

                <Route path="/" exact>
                    <Home></Home>
                </Route>
            </Switch>
            <Footer></Footer>
        </div>
    );
}
