import React from 'react';
import CanvasComponent from '../canvas/canvas';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>A MsPaint Clone</h1>
        <CanvasComponent />
        <footer>
          In loving memory of the king of pixelart,
          RIP MSPAINT
        </footer>
      </div>
    );
  }
}

export default MainPage;