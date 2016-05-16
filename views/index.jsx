var React = require('react');
var DefaultLayout = require('./default');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.props.username}</div>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;
