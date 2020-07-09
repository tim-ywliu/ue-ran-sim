export enum LineDirection {
    Up,
    Down,
    Left,
    Right,
}
enum LineState {
    Idle,
    Start,
    Stop,
}
class Line {
    state: LineState = LineState.Idle;
    actionInvoked: () => void;
    constructor(private lineDirection: LineDirection,
        public x1: number,
        public y1: number,
        public x2: number,
        public y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    InvokeWhenFinished(action: () => void) {
        this.actionInvoked = action;
    }
    Start() {
        this.state = LineState.Start;
    }

    IsFinished() {
        return this.state === LineState.Idle || this.state === LineState.Stop;
    }

    drawWithArrowheads(ctx: CanvasRenderingContext2D) {

        if (this.IsFinished()) {
            return;
        }
        // arbitrary styling
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'black';
        ctx.lineWidth = 1;

        // draw the line
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();

        // draw the starting arrowhead
        let startRadians = Math.atan((this.y2 - this.y1) / (this.x2 - this.x1));
        startRadians += ((this.x2 > this.x1) ? -90 : 90) * Math.PI / 180;
        this.drawArrowhead(ctx, this.x1, this.y1, startRadians);
        // draw the ending arrowhead
        let endRadians = Math.atan((this.y2 - this.y1) / (this.x2 - this.x1));
        endRadians += ((this.x2 > this.x1) ? 90 : -90) * Math.PI / 180;
        this.drawArrowhead(ctx, this.x2, this.y2, endRadians);
    }

    drawWithArrowhead(ctx: CanvasRenderingContext2D) {
        if (this.IsFinished()) {
            return;
        }
        // arbitrary styling
        ctx.strokeStyle = 'blue';
        ctx.fillStyle = 'blue';
        ctx.lineWidth = 1;

        // draw the line
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        switch (this.lineDirection) {
            case LineDirection.Right:
                ctx.lineTo(this.x2 - 5, this.y2);
                break;
            case LineDirection.Left:
                ctx.lineTo(this.x2 + 5, this.y2);
                break;
            case LineDirection.Down:
                ctx.lineTo(this.x2, this.y2);
                break;
            case LineDirection.Up:
                ctx.lineTo(this.x2, this.y2);
                break;
        }
        ctx.stroke();

        // draw the ending arrowhead
        let endRadians = (this.x2 - this.x1) === 0 ? ((this.y2 > this.y1) ? -Math.PI / 2 : Math.PI / 2) :
            Math.atan((this.y2 - this.y1) / (this.x2 - this.x1));
        endRadians += ((this.x2 > this.x1) ? 90 : -90) * Math.PI / 180;
        this.drawArrowhead(ctx, this.x2, this.y2, endRadians);
    }

    drawArrowhead(ctx: CanvasRenderingContext2D, x: number, y: number, radians: number) {
        if (this.IsFinished()) {
            return;
        }
        ctx.save();
        ctx.beginPath();
        ctx.translate(x, y);
        ctx.rotate(radians);
        ctx.moveTo(0, 0);
        ctx.lineTo(4, 16);
        ctx.lineTo(-4, 16);
        ctx.closePath();
        ctx.restore();
        ctx.fill();
    }
    control() {
        if (this.state === LineState.Start) {
            this.state = LineState.Stop;
            if (this.actionInvoked !== null && this.actionInvoked !== undefined) {
                this.actionInvoked.call(this);
            }
        }
    }
    bounce(canvasWidth: number, canvasHeight: number) {
        // Increments the ball's position using its velocity
        if (!this.IsFinished()) {
            switch (this.lineDirection) {
                case LineDirection.Right:
                    this.x2 *= 1.033;
                    this.x2 += 0.25;
                    if (this.x2 > canvasWidth * 0.75) {
                        this.control();
                    }
                    break;
                case LineDirection.Left:
                    this.x2 -= (this.x2 * 0.033);
                    this.x2 -= 0.25;
                    if (this.x2 < 0) {
                        this.control();
                    }
                    break;
                case LineDirection.Down:
                    this.y2 *= 1.033;
                    this.y2 += 0.25;
                    if (this.y2 > canvasHeight * 0.75) {
                        this.control();
                    }
                    break;
                case LineDirection.Up:
                    this.y2 -= (this.y2 * 0.033);
                    this.y2 -= 0.35;
                    if (this.y2 < 10) {
                        this.control();
                    }
                    break;
            }

        }
    }
}

export class LineCanvas {

    private readonly ctx: CanvasRenderingContext2D; // HTML Canvas's 2D context
    private readonly canvasWidth: number; // width of the canvas
    private readonly canvasHeight: number; // height of the canvas
    private line = new Line(LineDirection.Right, 50, 150, 150, 150);
    private lineDirection: LineDirection;
    actionInvoked1: () => void;
    actionInvoked2: () => void;
    createLine() {
        switch (this.lineDirection) {
            case LineDirection.Right:
                this.line = new Line(LineDirection.Right, this.canvasWidth * 0.05, this.canvasHeight / 2.3,
                    this.canvasWidth * 0.2, this.canvasHeight / 2.3);
                break;
            case LineDirection.Left:
                this.line = new Line(LineDirection.Left, this.canvasWidth * 0.75, this.canvasHeight / 2.3,
                    this.canvasWidth * 0.70, this.canvasHeight / 2.3);
                break;
            case LineDirection.Down:
                this.line = new Line(LineDirection.Down, this.canvasWidth / 2, this.canvasHeight * 0.05,
                    this.canvasWidth / 2, this.canvasHeight * 0.2);
                break;
            case LineDirection.Up:
                this.line = new Line(LineDirection.Up, this.canvasWidth / 2, this.canvasHeight * 0.75,
                    this.canvasWidth / 2, this.canvasHeight * 0.70);
                break;
        }

    }
    setInvokeWhenFinished1(invokedFunction1: () => void) {
        if (invokedFunction1 !== null && invokedFunction1 !== undefined) {
            this.actionInvoked1 = invokedFunction1;
        }
        this.line.InvokeWhenFinished(this.actionInvoked1);
    }
    setInvokeWhenFinished2(invokedFunction2: () => void) {
        if (invokedFunction2 !== null && invokedFunction2 !== undefined) {
            this.actionInvoked2 = invokedFunction2;
        }
    }
    constructor(canvas: HTMLCanvasElement, public text: string,
        lineDirection: LineDirection = LineDirection.Right) {
        this.ctx = this.setupCanvas(canvas, lineDirection);
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.lineDirection = lineDirection;
        this.createLine();
        this.ctx.fillStyle = '#EDF1F7';
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight); // erase the old ball
        window.requestAnimationFrame(() => this.draw()); // start the animation when the window is ready
    }

    setupCanvas(canvas: HTMLCanvasElement, lineDirection: LineDirection) {
        // Get the device pixel ratio, falling back to 1.
        const dpr = window.devicePixelRatio || 1;
        // Get the size of the canvas in CSS pixels.
        const rect = canvas.getBoundingClientRect();
        // Give the canvas pixel dimensions of their CSS
        // size * the device pixel ratio.
        if (lineDirection === LineDirection.Up || lineDirection === LineDirection.Down) {
            canvas.width = rect.width * dpr / 2.1;
        } else {
            canvas.width = rect.width * dpr;
        }
        if (lineDirection === LineDirection.Up || lineDirection === LineDirection.Down) {
            canvas.height = rect.height * dpr / 1.2;
        } else {
            canvas.height = rect.height * dpr;
        }
        const ctx = canvas.getContext('2d');
        // Scale all drawing operations by the dpr, so you
        // don't have to worry about the difference.
        ctx.scale(dpr, dpr);


        return ctx;
    }

    draw() {
        let girdiMi = false;
        if (!this.line.IsFinished()) {
            this.ctx.fillStyle = '#EDF1F7';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight); // erase the old ball
            girdiMi = true;
        }
        this.line.drawWithArrowhead(this.ctx); // draw the ball in the new position
        this.line.bounce(this.canvasWidth, this.canvasHeight); // calculate the ball's new position
        if (girdiMi) {
            this.ctx.font = 'bold 20px Arial';
            if (this.lineDirection === LineDirection.Up || this.lineDirection === LineDirection.Down) {
                this.ctx.fillText(this.text, this.canvasWidth / 2 + 5, this.canvasHeight / 2 + 7, 200);
            } else {
                this.ctx.fillText(this.text, this.canvasWidth / 2 - 18, this.canvasHeight / 2 - 25, 200);
            }
        }
        window.requestAnimationFrame(() => this.draw()); // repeat the draw step when the window requests a frame
    }

    Start() {
        this.line.Start();
    }
    StartReverse() {
        if (this.lineDirection === LineDirection.Up) {
            this.lineDirection = LineDirection.Down;
            this.createLine();
        } else if (this.lineDirection === LineDirection.Down) {
            this.lineDirection = LineDirection.Up;
            this.createLine();
        } else if (this.lineDirection === LineDirection.Right) {
            this.lineDirection = LineDirection.Left;
            this.createLine();
        } else if (this.lineDirection === LineDirection.Left) {
            this.lineDirection = LineDirection.Right;
            this.createLine();
        }
        this.line.InvokeWhenFinished(this.actionInvoked2);
        this.line.Start();
    }
}
