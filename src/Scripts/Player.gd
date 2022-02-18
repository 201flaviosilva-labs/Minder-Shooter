extends Area2D

export var SPEED = 400;

func _ready():
	pass

func _process(delta):
	look_at(get_global_mouse_position())
	var velocity = Vector2.ZERO;
	
	if Input.is_action_pressed("move_up"):
		velocity.y -= SPEED;
	elif Input.is_action_pressed("move_down"):
		velocity.y += SPEED;
	
	if Input.is_action_pressed("move_left"):
		velocity.x -= SPEED;
	elif Input.is_action_pressed("move_right"):
		velocity.x += SPEED;
		
	velocity = velocity.normalized() * SPEED;
	position += velocity * delta;
	pass
