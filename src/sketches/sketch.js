//TODO: Find a way to use ts
export default function sketch(p){
    // Code from https://www.openprocessing.org/sketch/738144
    let pallete = ["#DADCDA", "#DE200C", "#3A6DA8", "#A8BACC", "#0A1D4E", "#CD4645", "#C0AEB5", "#838CA9"];

    let graphics;
    let num = 1000;
    let movers = [];
    let offset;
    let bg;

    p.setup = () => {
        p.createCanvas(800, 800);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.angleMode(p.DEGREES);

        graphics = p.createGraphics(p.width, p.height);
        graphics.colorMode(p.HSB, 360, 100, 100, 100);
        drawNoiseBackground(100000, graphics);
        let n = p.int(p.random(pallete.length));
        bg = pallete[n];
        pallete.splice(n, 1);

        offset = p.width / 10;
        for (let i = 0; i < num; i++) {
            let x = p.random(p.width);
            let y = p.random(p.height);
            movers.push(new Mover(x, y));
        }
        p.background(bg);
    };

    p.draw = () => {
        for (let mover of movers) {
            mover.update();
            mover.display();
        }

        for (let i = movers.length - 1; i > 0; i--) {
            let mover = movers[i];
            if (mover.life == 0) {
                movers.splice(i, 1);
            }
        }
        for (let i = movers.length; i < num; i++) {
            let angle = p.random(360);
            let x = p.random(p.width);
            let y = p.random(p.height);
            movers.push(new Mover(x, y));
        }
    };

    class Mover {
        constructor(_x, _y) {
            this.pos = p.createVector(_x, _y);
            this.noiseScaleX = 400;
            this.noiseScaleY = 800;
            this.noiseScaleZ = p.random(100, 200);
            this.vel = p.createVector(0, 0);
            this.life = p.random(1);
            this.count = p.int(p.random(1, 10));
            this.c = pallete[p.int(p.random(pallete.length))];
        }
        update() {
            // let n = noise(this.pos.x / this.noiseScaleX, this.pos.y / this.noiseScaleY, frameCount / this.noiseScaleZ);
            let n = p.noise(this.pos.x / this.noiseScaleX, this.pos.y / this.noiseScaleY);
            let angle = p.map(n, 0, 1, 0, 360);
            this.vel = p.createVector(p.cos(angle), p.sin(angle));
            this.pos.add(this.vel);
            this.pos.x = p.constrain(this.pos.x, offset, p.width - offset);
            this.pos.y = p.constrain(this.pos.y, offset, p.height - offset);
            this.life -= p.random(p.random(p.random(p.random()))) / 10;
            this.life = p.constrain(this.life, 0, 1);
        }

        display() {
            p.strokeWeight(p.map(this.life, 0, 1, 0, 5));
            p.stroke(this.c + "66");
            p.point(this.pos.x, this.pos.y);
        }
    }

    function drawNoiseBackground(_n, _graphics) {
        let c = p.color(0, 0, 0, 0.2);
        for (let i = 0; i < _n; i++) {
            let x = p.random(1) * p.width;
            let y = p.random(1) * p.height;
            let w = p.random(1, 3);
            let h = p.random(1, 3);
            _graphics.noStroke();
            _graphics.fill(c);
            _graphics.ellipse(x, y, w, h);
        }
    }
}
