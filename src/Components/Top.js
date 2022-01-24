import React from 'react';
import {Link} from 'react-router-dom';

function Top() {
  return<>
     <ul class="nav nav-pills props.todo-nav">
                        <li role="presentation" class="nav-item all-task active">
                            <Link to='/alltasks'>
                            <a href="#" class="nav-link">All</a>
                            </Link>
                            </li>
                        <li role="presentation" class="nav-item active-task">
                            <Link to='/activetasks'>
                            <a href="#" class="nav-link" >Active</a>
                            </Link>
                            </li>
                        <li role="presentation" class="nav-item completed-task">
                            <Link to='/completedtasks'>
                            <a href="#" class="nav-link" >Completed</a>
                            </Link>
                            </li>
                    </ul>
  </>
}

export default Top
