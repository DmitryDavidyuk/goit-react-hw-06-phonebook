// import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactsList from './ContactsList';
import ContactsForm from './ContactsForm';
import Filter from './Filter';
import CSS from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../Redux/reducers';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const addContactID = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} вже в контактах.`);
    } else if (contacts.find(contact => contact.number === number)) {
      toast.error(`${number} вже в контактах.`);
    } else if (name.trim() === '' || number.trim() === '') {
      toast.error("Введіть ім'я та номер телефону контакту!");
    } else {
      dispatch(
        addContact({
          id: nanoid(5),
          name,
          number,
        })
      );
      toast.success('Контакт додано!');
    }
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={CSS.container}>
      <h1>Телефонна книга</h1>
      <ContactsForm onSubmit={addContactID} />
      <h2>Контакти</h2>
      <Filter />
      <ContactsList contacts={getVisibleContacts()} />
      <ToastContainer position="top-left" autoClose={2000} />
    </div>
  );
}

// const oldApp  {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidUpdate = (prevProps, prevState) => {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   };

//   componentDidMount = () => {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   };

//   addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(5),
//       name,
//       number,
//     };

//     const { contacts } = this.state;

//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert(`${name} is already in contacts.`);
//     } else if (contacts.find(contact => contact.number === number)) {
//       alert(`${number} is already in contacts.`);
//     } else if (name.trim() === '' || number.trim() === '') {
//       alert("Enter the contact's name and number phone!");
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [contact, ...contacts],
//       }));
//     }
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <div className={CSS.container}>
//         <h1>Телефонна книга</h1>
//         <ContactsForm onSubmit={this.addContact} />
//         <h2>Контакти</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactsList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
