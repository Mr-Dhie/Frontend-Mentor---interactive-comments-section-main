import ChatSection from './UI/pages/chat/Chat'
import ContextAndReducer from './Backend/context_and_reducer';

export default function App() {
  
  return (
    <main>
      <ContextAndReducer>
        <ChatSection/>
      </ContextAndReducer>
    </main>
  )
}
