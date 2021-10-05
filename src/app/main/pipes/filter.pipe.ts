import { Pipe, PipeTransform } from '@angular/core';
import { TodoTask } from '../model/todotask';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(todos: TodoTask[], search: string = ''): TodoTask[] {
    if (!search.trim()) {
      return todos;
    }
    return todos.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    })
  }

}
