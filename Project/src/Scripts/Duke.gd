extends RigidBody2D

export(PackedScene) var DUKE_SHOOT
export(float) var MIN_SPEED = 50
export(float) var MAX_SPEED = 150
export (float) var MIN_SHOOT_TIME = 0.5
export (float) var MAX_SHOOT_TIME = 5

onready var SHOOT_TIMER = $ShootTimer

func _ready():
	pass # Replace with function body.
	
func fix_direction(direction, new_position):
	position = new_position
	
	direction += rand_range(-PI / 4, PI / 4)
	rotation = direction
	
	var velocity = Vector2(rand_range(MIN_SPEED, MAX_SPEED), 0.0)
	linear_velocity = velocity.rotated(direction)
	pass
	
func destroy():
	queue_free()
	pass

func _on_ShootTimer_timeout():
	randomize()
	SHOOT_TIMER.wait_time = rand_range(MIN_SHOOT_TIME, MAX_SHOOT_TIME)
	
	var new_shoot = DUKE_SHOOT.instance()
	# new_shoot.transform = global_transform
	new_shoot.global_position = $ShootPos.global_position
	new_shoot.global_rotation = global_rotation
	get_tree().root.add_child(new_shoot)
	pass # Replace with function body.

func _on_VisibilityNotifier2D_screen_exited():
	queue_free()
	pass # Replace with function body.
