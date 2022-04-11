extends KinematicBody2D

signal fired(bullet, start_position, direction)

export (int) var SPEED = 400
export (PackedScene) var Bullet

var next_shoot_time = 10
var current_shoot_time = 0
var velocity = Vector2.ZERO

func _ready():
	$Sprite.set_texture(Minders.get_selected())
	pass

func _process(delta):
	look_at(get_global_mouse_position())
	velocity = Vector2.ZERO
	
	# Get inputs
	if Input.is_action_pressed("move_up"): velocity.y -= SPEED
	elif Input.is_action_pressed("move_down"): velocity.y += SPEED
	
	if Input.is_action_pressed("move_left"): velocity.x -= SPEED
	elif Input.is_action_pressed("move_right"): velocity.x += SPEED
	
	current_shoot_time += 1
	if Input.is_action_pressed("shoot"): shoot()
	pass
	
func _physics_process(delta):
	velocity = velocity.normalized() * SPEED
	move_and_slide(velocity, Vector2.ZERO, false, 4, 1, false)
	
	for i in get_slide_count():
		var collision = get_slide_collision(i)
		if collision.collider.is_in_group("Enemy"): collision.collider.call_deferred("destroy")
		pass
	pass

func shoot():
	if(next_shoot_time > current_shoot_time): return
	current_shoot_time = 0
	
	var new_bullet = Bullet.instance()
	
	var start_position = $ShootPos.global_position
	var direction = ($ShootDirectionPos.global_position - start_position).normalized()
	emit_signal("fired", new_bullet, start_position, direction)
	pass
