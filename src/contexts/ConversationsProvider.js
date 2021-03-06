import React, { useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from '../contexts/ContactsProvider';

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext);
}

export const ConversationsProvider = ({ children }) => {

    const [conversations, setConversations] = useLocalStorage('conversations', []);
    const { contacts } = useContacts();
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);


    function createConversation(recipients) {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        })
    }

    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient;
            })
            const name = (contact && contact.name) || recipient;
            return { id: recipient, name }
        })
        const selected = index === setSelectedConversationIndex;
        return { ...conversation, recipients, selected };
    })
    const value = {
        conversations: formattedConversations,
        selectedConversation: formattedConversations,
        selectedConversationIndex: selectedConversationIndex,
        createConversation
    }

    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    );
}

