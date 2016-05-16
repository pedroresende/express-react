var React = require('react');

var Carousel = React.createClass({
  render: function() {
    return(
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="http://devblog.pedro.resende.biz/images/b852951.jpg" alt="..." />
            <div className="carousel-caption">

            </div>
          </div>
          <div className="item">
            <img src="http://devblog.pedro.resende.biz/images/b852951.jpg" alt="..." />
            <div className="carousel-caption">

            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
  <span className="sr-only">Previous</span>
</a>
<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
  <span className="sr-only">Next</span>
</a>
      </div>
    );
  }
});

module.exports = Carousel;
