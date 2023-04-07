import {describe, expect, test} from '@jest/globals';
import { TodoClient } from './todo-client';
import { ApiManager } from './api-manager'

/**
 * 
 * @group unit
 */
describe('api manager', () => {

  test('throw error when todo client is undefined in constructor', async () => {
      
      expect(() => new ApiManager(undefined)).toThrow(new Error('TodoClient should not be undefined or null'))
    });

    test('fetchData should return data that todoClient provided', async () => {
      const expected = [
      { 
        userId: 1,
        id:1,
        title: 'code assessment',
        completed: true
      },
      { 
        userId: 2,
        id:2,
        title: 'go to work',
        completed: false
      },
      ];
      jest.spyOn(TodoClient.prototype, 'getTodos')
      .mockImplementation(() => {
        return  Promise.resolve(expected);
      })

        const apiManager = new ApiManager(new TodoClient());
        const actual = await apiManager.fetchData();
        
        expect(actual).toEqual(expected);
      });

      test('return 500 if error occur', async () => {
    
        jest.spyOn(TodoClient.prototype, 'getTodos')
        .mockImplementation(() => {
          throw new Error('Unexpected')
        })
  
          const apiManager = new ApiManager(new TodoClient());
          const actual = await apiManager.fetchData();
          
          expect(actual).toBe('500');
        });
});