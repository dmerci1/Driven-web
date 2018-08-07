<Grid.Column width={16}>
  <Segment>
    <Item.Group>
      <Item>
        <Item.Image avatar size='small' src='https://randomuser.me/api/portraits/men/20.jpg'/>
        <Item.Content verticalAlign='bottom'>
          <Header as='h1'>First Name</Header>
          <br/>
          <Header as='h1'>Occupation</Header>
          <br/>
          <Header as='h1'>28, Lives in Astoria, NY</Header>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
</Grid.Column>
<Grid.Column width={12}>
  <Segment>
    <Grid columns={2}>
      <Grid.Column width={10}>
        <Header icon='smile' content='display name' />
        <p>I am a: <strong>Occupation</strong></p>
        <p>From: <strong>Location</strong></p>
        <p>Member since: <strong>start</strong></p>
        <p>user description</p>
    </Grid.Column>
    <Grid.Column width={6}>
      <Header icon='heart outline' content='Interests' />
      <List>
        <Item>
          <Icon name='heart' />
          <Item.Content>Interest 1</Item.Content>
        </Item>
        <Item>
          <Icon name='heart' />
          <Item.Content>Interest 2</Item.Content>
        </Item>
        <Item>
          <Icon name='heart' />
          <Item.Content>Interest 3</Item.Content>
        </Item>
      </List>
    </Grid.Column>
  </Grid>
 </Segment>
</Grid.Column>
<Grid.Column width={4}>
  <Segment>
    <Button color='teal' fluid basic content='Edit Profile' />
  </Segment>
</Grid.Column>

<Grid.Column width={12}>
  <Segment attached>
    <Header icon='image' content='Photos' />

    <Image.Group size='small'>
      <Image src='https://randomuser.me/api/portraits/men/20.jpg'/>
      <Image src='https://randomuser.me/api/portraits/men/20.jpg'/>
      <Image src='https://randomuser.me/api/portraits/men/20.jpg'/>
      <Image src='https://randomuser.me/api/portraits/men/20.jpg'/>
    </Image.Group>
  </Segment>
</Grid.Column>

<Grid.Column width={12}>
  <Segment attached>
    <Header icon='calendar' content='Events'/>
    <Menu secondary pointing>
      <Menu.Item name='All Events' active/>
      <Menu.Item name='Past Events'/>
      <Menu.Item name='Future Events'/>
      <Menu.Item name='Events Hosted'/>
    </Menu>

    <Card.Group itemsPerRow={5}>

      <Card>
        <Card.Content>
          <Card.Header textAlign='center'>
            Event Title
          </Card.Header>
        </Card.Content>
      </Card>
    </Card.Group>
  </Segment>
</Grid.Column>
