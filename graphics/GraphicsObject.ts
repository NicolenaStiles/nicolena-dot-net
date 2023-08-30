export enum ObjectType {
    TestSquare,
    Player,
    Asteroid_L,
    Asteroid_M,
    Asteroid_S,
    Alien_L,
    Alien_S
}

export class GraphicsObject {
 
    // set these when instantiated, then never again
    private id : ObjectType;
    private width : number;
    private height : number;

    // init and update
    private center: { [key: string]: number }; 
 
    // Dertermined by Object Type
    private sketch_order: Array<string> = []; 

    // build out collection of points based on object type
    // TODO: make this less ugly? How lint?
    constructor (id: ObjectType, 
                 width: number, 
                 height: number, 
                 center_x: number, 
                 center_y: number) 
    {
        this.id = id;
        this.width = width;
        this.height = height;
        this.center = {
            'x': center_x,
            'y': center_y
        };

        // Collection of points is defined by ObjectType
        // (Player ship, asteroid, etc.)
        interface coordinates {
            [key: string]: number;
        }
        const verticies: { [key: string]: coordinates } = {};
        this.verticies = verticies;

        // Order of points for sketching object
        switch(this.id) {
            case ObjectType.TestSquare: {
                this.verticies['a'] = {
                    'x': this.center.x - (0.5 * this.width),
                    'y': this.center.y - (0.5 * this.height)
                };    
                this.verticies['b'] = {
                    'x': this.center.x + (0.5 * this.width),
                    'y': this.center.y - (0.5 * this.height)
                };
                this.verticies['c'] = {
                    'x': this.center.x + (0.5 * this.width),
                    'y': this.center.y + (0.5 * this.height)
                };
                this.verticies['d'] = {
                    'x': this.center.x - (0.5 * this.width),
                    'y': this.center.y + (0.5 * this.height)
                };
                this.sketch_order = ['a', 'b', 'c', 'd'];
                break;
            }
            case ObjectType.Player: {
                break;
            }
            case ObjectType.Asteroid_L: {
                break;
            }
            case ObjectType.Asteroid_M: {
                break;
            }
            case ObjectType.Asteroid_S: {
                break;
            }
            case ObjectType.Alien_L: {
                break;
            }
            case ObjectType.Alien_S:  {
                break;
            }
            default: {
                break;
            }
        }
    }
   
    public print_params(): void {
        console.log(`Object dimensions: ${this.width} x ${this.height} Center: ${this.center['x']}, ${this.center['y']}`);
    }

    public print_points(): void {
        for (let key in this.verticies) {
            console.log(`${key}: ${this.verticies[key]['x']}, ${this.verticies[key]['y']}`);
        }
    }

    public print_order(): void {
        console.log(`${this.sketch_order}`);
    }
}
