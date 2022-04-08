extends Area2D
class_name Bullet

export (int) var SPEED = 800;

var direction = Vector2.ZERO;

func _ready():
	$Sprite.set_texture(Minders.get_selected());
	pass

func set_direction(new_direction):
	direction = new_direction;
	rotation += direction.angle();
	pass
	
func _physics_process(delta: float):
	if direction == Vector2.ZERO: return;
	
	var velocity = direction * SPEED;
	global_position += velocity * delta;
	pass

func _on_Bullet_body_shape_entered(body_rid, body, body_shape_index, local_shape_index):
	body.call_deferred("destroy")
	queue_free()
	pass # Replace with function body.

func _on_VisibilityNotifier2D_screen_exited():
	queue_free()
	pass # Replace with function body.
