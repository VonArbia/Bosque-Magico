class particula {
    gravedad = 0.2;

    constructor(x, y, vx, vy, size) {
        this.x = this.ix = x;
        this.y = this.iy = y;
        this.vx = this.ivx = vx;
        this.vy = this.ivy = vy;
        this.size = size;
        this.rad = size / 2;
    }
    draw() {
        push();
        imageMode(CENTER);
        image(frutilla, this.x, this.y, this.size, this.size);
        pop();
    }
    update() {
        this.vy += this.gravedad;
        this.x += this.vx;
        this.y += this.vy;
        this._checkBounds();
    }
    reset() {
        this.x = this.ix;
        this.y = this.iy;
        this.vx = random(-this.ivx, this.ivx);
        this.vy = random(-this.ivy, this.ivy);
    }
    _checkBounds() {
        if (this.y + this.rad > height) {
            this.reset();
        }
    }
}

class ParticulaRebotadora extends particula {
    friccion = 0.99;
    update() {
        this.vx *= this.friccion;
        this.vy *= this.friccion;
        super.update();
    }
    _checkBounds() {
        // límites del rectángulo de rebote
        let rx = 335, ry = 126, rw = 92, rh = 174;
        // rebote horizontal
        if (this.x - this.rad < rx) {
            this.vx *= -1;
            this.x = rx + this.rad;
        }
        if (this.x + this.rad > rx + rw) {
            this.vx *= -1;
            this.x = rx + rw - this.rad;
        }
        // rebote vertical
        if (this.y - this.rad < ry) {
            this.vy *= -1;
            this.y = ry + this.rad;
        }
        if (this.y + this.rad > ry + rh) {
            this.vy *= -1;
            this.y = ry + rh - this.rad;
        }
    }
}