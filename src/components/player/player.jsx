import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";

class Player extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
    this.state = {
      isPause: !this.props.isPlaying,
    };
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      setTimeout(() => video.play(), 1000);
    } else {
      video.load();
    }
  }

  render() {
    const {film} = this.props;
    return (
      <video
        src={film.preview}
        poster={film.src}
        muted
        ref = {this._videoRef}
        width="280"
        height="175">
      </video>);
  }
}

Player.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  isPlaying: PropTypes.bool.isRequired,
};

export default Player;
