extends Area2D

export var SPEED = 600

func _ready():
	pass # Replace with function body.

func _physics_process(delta):
	position += transform.x * SPEED * delta
	pass
	
func destroy():
	queue_free()
	pass

func _on_VisibilityNotifier2D_screen_exited():
	queue_free()
	pass # Replace with function body.

func _on_DukeShoot_body_entered(body):
	if body.is_in_group("Player"): 
		body.call_deferred("hitted")
		destroy()
	elif body.is_in_group("Enemy"): 
		body.call_deferred("destroy")
		destroy()
	pass # Replace with function body.


func _on_DukeShoot_area_entered(area: Area2D):
	if area.is_in_group("EnemyBullet"):
		area.call_deferred("destroy")
		destroy()
	pass # Replace with function body.
