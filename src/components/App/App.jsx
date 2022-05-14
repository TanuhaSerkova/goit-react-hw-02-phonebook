import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Section, TitleH1, TitleH2 } from './App.styled';

export class App extends Component {
    state = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    filter: '',
    };
    
    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parcedContacts = JSON.parse(contacts);

        if (parcedContacts) {
            this.setState({ contacts: parcedContacts });
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        const nextContacts = this.state.contacts;
        const prevContacts = this.contacts;

        if (nextContacts !== prevContacts) {
            localStorage.setItem('contacts', JSON.stringify(nextContacts));
        }
    }

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getContacts();

        return (
            <Container>
                <Section title="Phonebook">
                    <TitleH1>Phonebook</TitleH1>
                </Section>
                <Section title="Contacts">
                    <TitleH2>Contacts</TitleH2>
                    <Filter value={filter} onChange={this.handleFilter} />
                </Section>
            </Container>
        );
    }
}