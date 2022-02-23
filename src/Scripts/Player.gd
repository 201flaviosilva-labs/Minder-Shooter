extends Area2D

signal fired(bullet, start_position, direction);

export (int) var SPEED = 400;
export (PackedScene) var Bullet;

var next_shoot_time = 10;
var current_shoot_time = 0;

func _ready():
	pass

func _process(delta):
	move(delta);
	current_shoot_time += 1;
	if Input.is_action_pressed("shoot"):
		shoot();
	pass
	
func move(delta):
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

func shoot():
	if(next_shoot_time > current_shoot_time): return;
	current_shoot_time = 0;
	
	var new_bullet = Bullet.instance();
	
	var start_position = $ShootPos.global_position;
	var direction = ($ShootDirectionPos.global_position - start_position).normalized();
	emit_signal("fired", new_bullet, start_position, direction);
	pass
