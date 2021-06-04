var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    console.log(database)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "blue";

    var posref = database.ref("Ball/Position");
    posref.on("value",function(data){
        position = data.val();
        ball.x = position.x
        ball.y = position.y
    },function(error){
        console.log(error.code)
    })
}

function draw(){
    background("cyan");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,5);
    }/* else if(keyDown(DOWN_ARROW) && keyDown(RIGHT_ARROW)){
        writePosition(5,5)
    } else if(keyDown(UP_ARROW) && keyDown(RIGHT_ARROW)){
        writePosition(-5,5)
    } else if(keyDown(UP_ARROW) && keyDown(LEFT_ARROW)){
        writePosition(-5,-5)
    } else if(keyDown(DOWN_ARROW) && keyDown(LEFT_ARROW)){
        writePosition(5,-5)
    }*/
    drawSprites();
}

function writePosition(x,y){
    database.ref("Ball/Position").set({
        x: position.x + x,
        y: position.y + y
    })
}
