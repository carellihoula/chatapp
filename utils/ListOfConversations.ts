import {Conversation} from './utils'
import {messages1, messages2, messages3} from './utils'
import {listOfUsers} from './ListOfUser'

export const conversations: Conversation[] = [
    {
      conversationId: 1,
      participants: [1, listOfUsers[1].userId],
      messages: messages1
    },
    {
      conversationId :2,
      participants: [1, listOfUsers[2].userId],
      messages: messages2
    },
    {
      conversationId: 3,
      participants: [1, listOfUsers[3].userId],
      messages: messages3
    },
    

]