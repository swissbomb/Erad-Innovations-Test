#pragma strict
var Bullets : int = 32;
var Player : Transform;
var Pistol : GameObject;
var IsPistol : boolean = false;
var PistolTrans : Transform;
var IsAimed : boolean = false;
var bulletSpawn : Transform;
var BulletSpawnObject : GameObject;
var bullet : GameObject;
var canShoot : boolean = true;
function Start () 
{
	Pistol.SetActive(false);
	BulletSpawnObject.SetActive(false);
}
function Update () 
{
	Cursor.lockState = CursorLockMode.Locked;
	Cursor.visible = false;
	
	//RELOAD SYSTEM
	if(Bullets <= 0)
	{
		canShoot = false;
		Debug.Log("Press 'R' to reload");
	}
	
	if(Input.GetKey(KeyCode.R))
	{
		Bullets = 32;
		canShoot = true;
	}
	
	if (IsPistol == false)
	{
		BulletSpawnObject.SetActive(false);
	}
	if (IsPistol == true)
	{
		BulletSpawnObject.SetActive(true);
	}
	if (Input.GetMouseButtonDown(1))
	{
		if (IsAimed == false)
		{
			IsAimed = true;
			PistolTrans.Translate(Vector3.back * .45);
			PistolTrans.Translate(Vector3.up * .25);
		}
		else
		{
			PistolTrans.Translate(Vector3.forward * .45);
			PistolTrans.Translate(Vector3.down * .25);
			IsAimed = false;
		}
	}
	if (Input.GetKeyDown(KeyCode.Alpha1))
	{
		if (IsPistol == false)
		{
			IsPistol = true;
			Pistol.SetActive(true);
		
		}
		else
		{
			Pistol.SetActive(false);
			IsPistol = false;
		}
	}
	if (Input.GetButtonDown("Fire1")) 
	{
		if (IsPistol == true && canShoot == true)
		{
			Debug.Log(Bullets);
    		bullet.GetComponent.<Rigidbody>();
    		var Shoot = Instantiate(bullet, GameObject.Find ("bulletspawn").transform.position, transform.rotation) as GameObject;
			Shoot.GetComponent.<Rigidbody>().AddForce(bulletSpawn.forward * 2000);
			Bullets = Bullets - 1;
		}
	}
}