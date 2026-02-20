import React from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <AddTask />
            <Tasks />
            <Footer />
        </div>
    );
};

export default App;
