// --------------------------------------------------------------
//
// Renders a Lander object.
//
// spec = {
//    image: ,
//    center: { x: , y: },
//    size: { width: , height: }
// }
//
// --------------------------------------------------------------
LunarLander.render.Terrain = (function(graphics) {
    'use strict';

    function render(spec) {
        graphics.drawTerrain(spec.points, spec.pointsLen);
    }

    return {
        render: render
    };
}(LunarLander.graphics));