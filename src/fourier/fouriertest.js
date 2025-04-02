import React from "react";
import Sketch from "react-p5"; // Import p5.js in React
import drawing from "../fourier/datas"; // Ensure correct data import
import dft from "../fourier/fft"; // Ensure correct FFT function import
import "../styles/Home.css"; // Ensure CSS file exists

const DrawFourierOm = () => {
    let x = [];
    let y = [];
    let fourierX;
    let fourierY;
    let time = 0;
    let path = [];

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(800, 600).parent(canvasParentRef);
        p5.angleMode(p5.RADIANS); // Ensure correct rotation mode

        const skip = 1;
        for (let i = 0; i < drawing.length; i += skip) {
            x.push(drawing[i].x);
            y.push(drawing[i].y);
        }

        fourierX = dft(x);
        fourierY = dft(y);

        fourierX.sort((a, b) => b.amp - a.amp);
        fourierY.sort((a, b) => b.amp - a.amp);
    };

    const epiCycles = (p5, x, y, rotation, fourier) => {
        for (let i = 0; i < fourier.length; i++) {
            let prevx = x;
            let prevy = y;
            let freq = fourier[i].freq;
            let radius = fourier[i].amp;
            let phase = fourier[i].phase;
            x += radius * Math.cos(freq * time + phase + rotation);
            y += radius * Math.sin(freq * time + phase + rotation);

            p5.stroke(255, 100);
            p5.noFill();
            p5.ellipse(prevx, prevy, radius * 2);
            p5.stroke(255);
            p5.line(prevx, prevy, x, y);
        }
        return p5.createVector(x, y);
    };

    const draw = (p5) => {
        p5.background(0); // White background
    
        const dt = p5.TWO_PI / fourierY.length;
    
        let vx = epiCycles(p5, p5.width / 2 + 100, 100, 0, fourierX);
        let vy = epiCycles(p5, 100, p5.height / 2 + 100, p5.HALF_PI, fourierY);
        let v = p5.createVector(vx.x, vy.y);
        path.unshift(v);
    
        if (!(time + dt > p5.TWO_PI - Math.PI / Math.pow(10, 14))) {
            p5.stroke(255); 
            p5.line(vx.x, vx.y, v.x, v.y);
            p5.line(vy.x, vy.y, v.x, v.y);
        }
    
        p5.beginShape();
        p5.noFill();
        for (let i = 0; i < path.length; i++) {
            p5.vertex(path[i].x, path[i].y);
        }
        p5.endShape();
    
        time += dt;
    
        if (time > p5.TWO_PI - Math.PI / Math.pow(10, 14)) {
            p5.noLoop();
        }
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default DrawFourierOm;
