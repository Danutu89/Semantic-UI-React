import React, {Component} from 'react';
import {Message} from 'stardust';

export default class MessageIconExample extends Component {
  render() {
    return (
      <div>
        <Message icon='inbox' heading='Have you heard about our mailing list?'>
          Get the best news in your e-mail every day.
        </Message>

        <Message icon='notched circle loading' heading='Just one second'>
          We're fetching that content for you.
        </Message>
      </div>
    );
  }
}
