extends Area2D
class_name Bullet

export (int) var SPEED = 800;

var direction = Vector2.ZERO;

func _ready():
	pass

func set_direction(new_direction):
	direction = new_direction;
	rotation += direction.angle();
	pass
	
func _physics_process(delta):
	if direction == Vector2.ZERO: return;
	
	var velocity = direction * SPEED;
	global_position += velocity * delta;
	pass
