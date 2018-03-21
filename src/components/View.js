import React, { Component } from 'react';
import 'aframe'
import { Entity, Scene } from 'aframe-react';

class View extends Component {

  // This renders json to aframe entities
  helper = (ent, id) => {
    // for now only look one level deep for animations
    var anim, cam;
    if (ent && ent.animation)
      anim = <a-animation {...ent.animation}/>;
    else
      anim = null;

    if (ent && ent.camera){
      if (ent.cursor) {
        cam = <a-camera>
                <a-cursor></a-cursor>
              </a-camera>;
      } else {
        cam = <a-camera />;
      }
      delete ent.camera;
      return <Entity id="cam" key={id} {...ent}>{cam}</Entity>
    }

    return (
      <Entity key={id} {...ent}>
        {anim}
      </Entity>
    );
  }

  render = () => {
    return (
      <div id="scene" className="col-lg-8">
        <Scene embedded >
          {this.props.objects.map((x, index) => this.helper(x, index))}
        </Scene>
      </div>
    );
  }
}

export default View;