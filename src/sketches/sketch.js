//TODO: Find a way to use ts
export default function sketch(p){
    // Code from https://www.openprocessing.org/

    let particles_a = [];
    let particles_b = [];
    let particles_c = [];
    let nums =50;
    let noiseScale = 800;

    let pathPoints = [];
    let maxIter = 500;
    let it = 0;

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(21, 8, 50);


        for(let i = 0; i < nums; i++){
            particles_a[i] = new Particle(p.random(0, p.width),p.random(0,p.height));
            particles_b[i] = new Particle(p.random(0, p.width),p.random(0,p.height));
            particles_c[i] = new Particle(p.random(0, p.width),p.random(0,p.height));
        }
    };

    p.draw = () => {
        displayBackground(p);
        if (it < maxIter) {
            displaySphere(p);
            it++;
        }
    };

    function displaySphere(p) {
        //create the path
        pathPoints = circlePoints();

        for(let j=0;j<3;j++){
            pathPoints = complexifyPath(pathPoints);
        }

        //draw the path
        p.stroke(255,25);
        for(let i=0;i<pathPoints.length -1;i++){
            let v1 = pathPoints[i];
            let v2 = pathPoints[i+1];
            p.line(v1.x,v1.y,v2.x,v2.y);
        }
    }

    function displayBackground(p) {
        p.noStroke();
        p.smooth();
        for(let i = 0; i < nums; i++){
            let radius = p.map(i,0,nums,1,2);
            let alpha = p.map(i,0,nums,0,250);

            p.fill(69,33,124,alpha);
            particles_a[i].move();
            particles_a[i].display(radius);
            particles_a[i].checkEdge();

            p.fill(7,153,242,alpha);
            particles_b[i].move();
            particles_b[i].display(radius);
            particles_b[i].checkEdge();

            p.fill(255,255,255,alpha);
            particles_c[i].move();
            particles_c[i].display(radius);
            particles_c[i].checkEdge();
        }
    }


    function complexifyPath(pathPoints){
        //create a new path array from the old one by adding new points inbetween the old points
        let newPath = [];

        for(let i=0;i<pathPoints.length -1;i++){
            let v1 = pathPoints[i];
            let v2 = pathPoints[i+1];
            let midPoint = p.createVector().add(v1, v2).mult(1);
            let distance =  v1.dist(v2);

            //the new point is halfway between the old points, with some gaussian variation
            let standardDeviation = 0.250*distance;
            let v = p.createVector(p.randomGaussian(midPoint.x,standardDeviation),p.randomGaussian(midPoint.y,standardDeviation));
            p.append(newPath,v1);
            p.append(newPath,v);
        }

        //don't forget the last point!
        p.append(newPath,pathPoints[pathPoints.length-1]);
        return newPath;
    }

    function circlePoints() {
        //two points somewhere on a circle
        let r = p.height/2;
        let theta1 = p.randomGaussian(0,p.PI/4);
        let theta2 = theta1 + p.randomGaussian(0,p.PI/3);
        let v1 = p.createVector(p.width/2 + r*p.cos(theta1),p.height/2 + r*p.sin(theta1));
        let v2 = p.createVector(p.width/2 + r*p.cos(theta2),p.height/2 + r*p.sin(theta2));

        return [v1,v2];
    }

    function Particle(x, y){
        this.dir = p.createVector(0, 0);
        this.vel = p.createVector(0, 0);
        this.pos = p.createVector(x, y);
        this.speed = 0.4;

        this.move = function(){
            let angle = p.noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*p.TWO_PI*noiseScale;
            this.dir.x = p.cos(angle);
            this.dir.y = p.sin(angle);
            this.vel = this.dir.copy();
            this.vel.mult(this.speed);
            this.pos.add(this.vel);
        };

        this.checkEdge = function(){
            if(this.pos.x > p.width || this.pos.x < 0 || this.pos.y > p.height || this.pos.y < 0){
                this.pos.x = p.random(50, p.width);
                this.pos.y = p.random(50, p.height);
            }
        };

        this.display = function(r){
            p.ellipse(this.pos.x, this.pos.y, r, r);
        };
    }
}
