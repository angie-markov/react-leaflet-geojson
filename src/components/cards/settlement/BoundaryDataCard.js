'use strict';

import React from 'react';

import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

let BoundaryDataCard = (props) => (
  <Card initiallyExpanded={props.initiallyExpanded}
    style={props.style}>
    <CardHeader {...props.cardHeader}
      avatar={
        <Avatar
          icon={<FontIcon className="material-icons">{props.icon}</FontIcon>}
          color={Colors.white}
          backgroundColor={Colors.lightBlue900}
        />}
      showExpandableButton={props.showExpandableButton}
      actAsExpander={true} />
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

BoundaryDataCard.displayName = 'Cards.Settlement.BoundaryDataCard';

BoundaryDataCard.propTypes = {
  initiallyExpanded: React.PropTypes.bool,
  showExpandableButton: React.PropTypes.bool,
  style: React.PropTypes.object,
  icon: React.PropTypes.string,
  cardHeader: React.PropTypes.object,
};
BoundaryDataCard.defaultProps = {
  initiallyExpanded: false,
  showExpandableButton: true,
  style: {},
  icon: 'explore',
  cardHeader: {
    title: 'Settlement Boundary',
    subtitle: 'Geographic Information'
  }
};

export default BoundaryDataCard;
