import {describe, expect, test} from '@jest/globals';
import { TodoClient } from './todo-client';
import { ApiManager } from './api-manager'
import { container } from './inversify.config'

/**
 * 
 * @group integration
 */
describe('integration test: api manager', () => {
      test('todo client should inject to api manager', async () => {

          const apiManager = container.resolve(ApiManager)
          const todoClient = apiManager["todoClient"];
          
          expect(todoClient).toBeInstanceOf(TodoClient);
        });
});