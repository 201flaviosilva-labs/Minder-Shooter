extends Area2D

export var SPEED = 600

func _ready():
	pass # Replace with function body.

func _physics_process(delta):
	position += transform.x * SPEED * delta
	pass

func _on_VisibilityNotifier2D_screen_exited():
	queue_free()
	pass # Replace with function body.
