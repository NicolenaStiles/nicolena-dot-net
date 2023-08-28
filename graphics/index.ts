// Main index file
// This is gonna be kinda messy for a bit, but I'll clean it up later
// Referencing breakout game from "breakout.ts" here
import { ObjectType } from "./GraphicsObject"
import { GraphicsObject } from "./GraphicsObject"

// Grabbing relevant DOM items
var canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Initial conditions (start ship in middle of canvas)
// r = rotation (starts at 0)
const width = window.innerWidth;
const height = window.innerHeight;

// testing!
let test_obj_type: ObjectType = ObjectType.TestSquare;
let test_obj_width : number  = 20;
let test_obj_height : number = 20;
let test_obj_center_x : number = width/2;
let test_obj_center_y : number = height/2;
let test_obj = new GraphicsObject(test_obj_type,
                                  test_obj_width,
                                  test_obj_height,
                                  test_obj_center_x,
                                  test_obj_center_y);
test_obj.print_params();
test_obj.print_points();
test_obj.print_order();
