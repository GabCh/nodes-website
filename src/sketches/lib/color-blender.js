// Thanks to Steve Champeon (hesketh.com) for explaining the math in such a way that I could
// understand it and create this tool
// Thanks to Roberto Diez for the idea to create the "waterfall" display
// Thanks to the Rhino book, I was able to (clumsily) set up the Color object
//   v1.0 (20030213) initial release
//   v1.1 (20030221) added rgbd and rgbp value types
//   v1.2 (20030511) added "waterfall" display of "web-safe" colors
//   v1.3 (20030514) single-page structure for easy local saves; CC license
//   v1.4 (20150321) added URL fragment ID storing of colors, steps, type
// v1.4.1 (20150322) fixed RGB/rgb parsing error
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.coll = [r, g, b];
        this.valid = ColorBlender.cVerify(this.coll);
        this.text = ColorBlender.cText(this.coll, 'hex');
        this.bg = ColorBlender.cText(this.coll, 'hex');
    }
}

export class ColorBlender {
    cursor = 0;
    base = 16;
    ends = [new Color(), new Color()];
    step = new Array(3);
    midpoints = 1
    palette = [];

    constructor(inColStr, outColStr, colStrType, midpoints) {
        this.init();
        if (midpoints <= 80) {
            this.midpoints = midpoints
        } else {
          throw Error('ColorBlender max midpoints = 80')
        }
        this.ends[0] = this.colorParse(inColStr, colStrType)
        this.ends[1] = this.colorParse(outColStr, colStrType)
        this.stepCalc()
        this.mixPalette()
    }

    static cVerify(c) {
        let valid = 'n';
        if ((!isNaN(c[0])) && (!isNaN(c[1])) && (!isNaN(c[2]))) {
            valid = 'y'
        }
        return valid;
    }

    static cText(c, t) {
        let result = '';
        let d = 1;
        for (let k = 0; k < 3; k++) {
            const val = Math.round(c[k]/d);
            let piece = val.toString(16);
            if (t === 'hex' && piece.length < 2) {piece = '0' + piece;}
            result = result + piece;
        }
        if (t === 'hex') {result = '#' + result.toUpperCase();}
        return result;
    }

    getPalette() {
        return this.palette
    }

    colorParse(c, t) {
        let m = 1;
        c = c.toUpperCase();
        let col = c.replace(/[\#\(]*/i, '');
        let num;
        if (t === 'hex') {
            if (col.length === 3) {
                const a = col.substr(0, 1);
                const b = col.substr(1, 1);
                const c = col.substr(2, 1);
                col = a + a + b + b + c + c;
            }
            num  = [col.substr(0, 2), col.substr(2, 2), col.substr(4, 2)];
            this.base = 16;
        }
        const ret = [parseInt(num[0], this.base) * m, parseInt(num[1], this.base) * m, parseInt(num[2], this.base) * m];
        return new Color(ret[0], ret[1], ret[2]);
    }

    mixPalette() {
        const steps = this.midpoints;
        const count = steps + 1;
        this.palette[0] = new Color(this.ends[0].r, this.ends[0].g, this.ends[0].b);
        this.palette[count] = new Color(this.ends[1].r, this.ends[1].g, this.ends[1].b);
        for (let i = 1; i < count; i++) {
            const r = (this.ends[0].r + (this.step[0] * i));
            const g = (this.ends[0].g + (this.step[1] * i));
            const b = (this.ends[0].b + (this.step[2] * i));
            this.palette[i] = new Color(r, g, b);
        }
        for (let j = count + 1; j < 12; j++) {
            this.palette[j].text = '';
            this.palette[j].bg = 'white';
        }
    }

    stepCalc() {
        const steps = this.midpoints + 2
        this.step[0] = (this.ends[1].r - this.ends[0].r) / steps;
        this.step[1] = (this.ends[1].g - this.ends[0].g) / steps;
        this.step[2] = (this.ends[1].b - this.ends[0].b) / steps;
    }

    init() {
        for (let i = 0; i < 2; i++) {
            this.ends[i] = new Color();
        }
        for (let j = 0; j < (this.midpoints + 2); j++) {
            this.palette[j] = new Color();
        }
    }
}
