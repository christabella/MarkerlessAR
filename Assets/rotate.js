#pragma strict

public var speed : float = 50f;

function Update () {
	transform.Rotate(Vector3.forward, speed);	
}
