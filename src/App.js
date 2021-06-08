import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {

    const expenses = [
        {
            id: 'e1',
            title: 'Jouet',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'Nouvelle Tv',
            amount: 799.49,
            date: new Date(2021, 2, 12)
        },
        {
            id: 'e3',
            title: 'Assurance Voiture',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'Nouveau bureau',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    //  return React.createElement(
    //   'div',
    //   {},
    //   React.createElement('h2',{}, "Let's get started"),
    //   React.createElement(Expenses, {items:expenses})
    //);

    return (
        <div>
            <NewExpense />
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
