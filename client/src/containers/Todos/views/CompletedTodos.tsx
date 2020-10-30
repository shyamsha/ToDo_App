import React, { Fragment } from 'react';
import { Todo } from '../types';

interface Props {
  todos: Todo[];
  loading: boolean;
}

export default function CompletedTodos(props:Props) {
  return (
    <Fragment>
      <div>
        completed tasks
      </div>
    </Fragment>
  )
}
