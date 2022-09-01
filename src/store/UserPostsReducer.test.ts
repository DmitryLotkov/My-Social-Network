import { v1 } from 'uuid';

import postPhoto from '../Images/Post photo.png';
import user1 from '../Images/Users/user-1.jpg';
import user2 from '../Images/Users/user-2.jpg';
import user3 from '../Images/Users/user-3.jpg';
import user4 from '../Images/Users/user-4.jpg';
import user5 from '../Images/Users/user-5.jpg';
import user6 from '../Images/Users/user-6.jpg';
import user7 from '../Images/Users/user-7.jpg';
import user8 from '../Images/Users/user-8.jpg';
import user9 from '../Images/Users/user-9.jpg';

import UserPostsReducer, {
  addPostActionAC,
  deleteMyPostAC,
  PostsType,
} from './UserPostsReducer';

let startState: PostsType;
beforeEach(() => {
  startState = {
    myPostsData: [
      { id: '1', message: 'Do you have a job for me? What if I find it?', likesCount: 0 },
      { id: '2', message: 'I want to be a serious frontend developer.', likesCount: 0 },
      { id: '3', message: "What is the good weather today,isn't it?", likesCount: 0 },
    ],
    onlineFriends: [
      { id: v1(), avatar: user1 },
      { id: v1(), avatar: user2 },
      { id: v1(), avatar: user3 },
      { id: v1(), avatar: user4 },
      { id: v1(), avatar: user5 },
      { id: v1(), avatar: user6 },
      { id: v1(), avatar: user7 },
      { id: v1(), avatar: user8 },
      { id: v1(), avatar: user9 },
    ],
    anyUserPostsData: [
      {
        id: v1(),
        avatar: user5,
        name: 'Theresa Steward',
        position: 'iOS developer',
        postPhoto: undefined,
        postText:
          'What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? ' +
          'What was it to the Dursleys if Harry went back to school without any of his homework done? ' +
          'The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).',
      },
      {
        id: v1(),
        avatar: user4,
        name: 'Kyle Fisher',
        position: 'Product manager',
        postPhoto,
        postText: "How's your day going, guys?",
      },
      {
        id: v1(),
        avatar: user7,
        name: 'Audrey Alexander',
        position: 'Android developer',
        postPhoto: undefined,
        postText:
          'The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. ' +
          '«I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. ' +
          'And I can run away from you, grey wolf!» says the bun and runs away.',
      },
    ],
  };
});
test('new post should be added', () => {
  const action = addPostActionAC('new String');

  const endState = UserPostsReducer(startState, action);

  expect(endState.myPostsData.length).toBe(4);
  expect(endState.myPostsData[3].message).toBe('new String');
});

test('chosen post must be deleted', () => {
  const action = deleteMyPostAC('1');

  const endState = UserPostsReducer(startState, action);

  expect(endState.myPostsData.length).toBe(2);
  expect(endState.myPostsData[0].id).toBe('2');
});
