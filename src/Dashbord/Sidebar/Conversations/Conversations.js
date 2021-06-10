import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../../../contexts/ConversationsProvider'
import './Conversations.scss';

const Conversations = () => {

    const { conversations, selectedConversationIndex } = useConversations();

    return (
        <div>
            <ListGroup variant="flush">
                {conversations.map((conversation, index) => (
                    <ListGroup.Item 
                    key={index}
                    action
                    onClick={() => selectedConversationIndex(index)}
                    active={conversation.selected}
                    >
                        {conversation.recipients.map(recipient => recipient.name).join(', ')}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default Conversations;
