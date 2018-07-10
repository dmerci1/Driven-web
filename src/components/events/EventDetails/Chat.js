import React from 'react';
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react';

const EventChat = () => {
  return (
    <div>
        <Segment
          textAlign="center"
          attached="top"
          inverted
          color="teal"
          style={{border: 'none'}}
        >
          <Header>Event Chat</Header>
        </Segment>

        <Segment attached>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src="/assets/pat.png" />
              <Comment.Content>
                <Comment.Author as="a">Pat</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42</div>
                </Comment.Metadata>
                <Comment.Text>Yayyy</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Repy</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

              <Comment>
                <Comment.Avatar src="/assets/pat.png" />
                <Comment.Content>
                  <Comment.Author as="a">Dan</Comment.Author>
                  <Comment.Metadata>
                    <div>Yesterday at 5:42</div>
                  </Comment.Metadata>
                  <Comment.Text>Yupp</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Repy</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

                <Comment>
                  <Comment.Avatar src="/assets/pat.png" />
                  <Comment.Content>
                    <Comment.Author as="a">Bryce</Comment.Author>
                    <Comment.Metadata>
                      <div>wednesday at 5:42</div>
                    </Comment.Metadata>
                    <Comment.Text>schun schun schun</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Repy</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Form reply>
                  <Form.TextArea />
                  <Button
                    content="Add Reply"
                    labelPosition="left"
                    icon="edit"
                    primary
                  />
                </Form>
              </Comment.Group>
             </Segment>
          </div>
  );
};

export default EventChat;
