import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './component/ChatFeed';

import './App.css';

const App = () => {
    return(
        <ChatEngine 
            heignt="100vh"
            projectID="8913aaef-ab0c-4d32-a87b-d89400b7bbef"
            userName="Ankush"
            userSecret="ankush123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;