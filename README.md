* Run frontend
* `npm run watch`
* Run backend
* `php artisan serve`

* Reset Database
* `php artisan migrate:fresh`
* `php artisan migrate:reset`

* Admin Create
```
$ php artisan tinker;
use App\User;
use Illuminate\Support\Facades\Hash;

$pass = Hash::make('password');

$u = new User;
$u->name = "Admin";
$u->role = "admin";
$u->email = "admin@admin.com";
$u->password = $pass;
$u->save();
```
